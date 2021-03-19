import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './admin/components/Nav';
import Menu from './admin/components/Menu';
import Users from './admin/Users';
import { BrowserRouter, Route } from "react-router-dom"
import Main from './main/Main';
import CreateUser from './admin/CreateUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={Main} />
        <Route path='/admin/users' exact component={Users} />
        <Route path='/admin/users/create' exact component={CreateUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
