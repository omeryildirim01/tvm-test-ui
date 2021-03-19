import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './admin/components/Nav';
import Menu from './admin/components/Menu';
import Users from './admin/Users';
import { BrowserRouter, Route } from "react-router-dom"
import Main from './main/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={Main} />
        <Route path='/admin/users' component={Users} />
      </BrowserRouter>
    </div>
  );
}

export default App;
