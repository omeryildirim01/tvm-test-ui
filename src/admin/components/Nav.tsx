import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
               <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to={'/'}> TVM React Application</Link>
        </header>
    );

};
export default Nav;