import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Users from './admin/Users';
import { BrowserRouter, Route } from "react-router-dom"
import Main from './main/Main';

function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>
            <Route path='/' component={Main}/>
              <Route path='/admin/users' component={Users} />
            </BrowserRouter>
          </main>
        </div>

      </div>
    </div>
  );
}

export default App;
