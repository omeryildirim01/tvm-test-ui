import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/'}>  User Management Module</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

};
export default Menu;