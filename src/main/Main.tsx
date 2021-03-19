import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { User } from '../interfaces/user';

const Main = () => {
    const [users, setUsers] = useState([]);
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

    return (
        <div>
            <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
                <p className="h5 my-0 me-md-auto fw-normal">TVM React Application</p>
                <nav className="my-2 my-md-0 me-md-3">
                    <a className="p-2 text-dark" href="#"></a>
                    <a className="p-2 text-dark" href="#"></a>
                    <a className="p-2 text-dark" href="#"></a>
                    <a className="p-2 text-dark" href="#"></a>
                </nav>
                <div className="btn btn-outline-primary">
                    <Link to={'/admin/users'}> Dashboard</Link>
                </div>
            </header>
            <main className="container">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">User Management Module</h1>
                    <p className="lead">Application allows us to manage users by using create, edit or delete methods </p>
                </div>
                <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {users.map(
                            (u: User) => {
                                return (
                                    <div className="col-md-4" key={u.id}>
                                        <div className="card mb-4 shadow-sm">
                                        <div className="d-flex justify-content-center"> 
                                         <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" height="80" width ="120"/>
                                         </div>
                                            <div className="card-body">
                                                <p className="card-text font-weight-bold">User Name</p>
                                                <p className="card-text font-weight-light">{u.name}</p>
                                                <div className="d-flex justify-content-end">
                                                    <i className="bi bi-telephone">{u.phone}</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>

                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    
                </div>

                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="link-secondary" href="#">Cool stuff</a></li>
                                <li><a className="link-secondary" href="#">Random feature</a></li>
                                <li><a className="link-secondary" href="#">Team feature</a></li>
                                <li><a className="link-secondary" href="#">Stuff for developers</a></li>
                                <li><a className="link-secondary" href="#">Another one</a></li>
                                <li><a className="link-secondary" href="#">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="link-secondary" href="#">Resource</a></li>
                                <li><a className="link-secondary" href="#">Resource name</a></li>
                                <li><a className="link-secondary" href="#">Another resource</a></li>
                                <li><a className="link-secondary" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="link-secondary" href="#">Team</a></li>
                                <li><a className="link-secondary" href="#">Locations</a></li>
                                <li><a className="link-secondary" href="#">Privacy</a></li>
                                <li><a className="link-secondary" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </main>

        </div>



    );
};
export default Main;