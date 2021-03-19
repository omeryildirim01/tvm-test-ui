import React, { useEffect, useState } from 'react'
import { User } from '../interfaces/user';
import Wrapper from './Wrapper';

const Users = () => {

    const [users,setUsers] = useState([]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8090/user');

                const data = await response.json();

                console.log(data);
                setUsers(data);
            }
        )();
    }, []);

    const del = async (id: number) =>{
        if(window.confirm('Are you sure you want to delete this record ?')){

            await fetch(`http://localhost:8090/user/delete/${id}`, {
                method: 'DELETE'
            });
    
            setUsers(users.filter((u: User) => u.id !== id ));
        }
      
    }

    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  users.map(
                            (u: User)=> {
                            return (
                                <tr key={u.id}>
                                <td></td>
                                <td>{u.name}</td>
                                <td>{u.phone}</td>
                                <td>{u.address}</td>
                                <td>{u.email}</td>
                                <td>
                                    <div className="btn-group mr-2">
                                        <a href="#" className="btn btn-sm btn-outline-secondary"
                                        onClick={() => del(u.id)}
                                        >
                                            Delete</a>

                                    </div>
                                </td>
                               </tr>

                            )
                        }) }
                       
                

                    </tbody>
                </table>
            </div>
        </Wrapper>
    );

};
export default Users;