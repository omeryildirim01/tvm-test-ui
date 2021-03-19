import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
            <div className="pt3 pb-2 mb-3 border-bottom">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to={'/admin/users/create'} className ="btn btn-sm btn-outline-secondary"> Add</Link>
                </div>

            </div>
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
                                       <Link to={'/admin/users/edit'} className="btn btn-sm btn-outline-secondary"  >Edit</Link>
                                        <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => del(u.id)}  >Delete</a>
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