import React, { useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Login from '../Login/Login';
import Darkmode from './Darkmode';

import './menubar.css'
const Menubar = () => {
   const {user} = useAuth();
  return (
    <div className='navigation'>
      <Navbar collapseOnSelect expand="sm"  variant="dark" className='container'>
       
        
            <img alt='' className='rounded-pill' width="18px" height="18px" src={user.photoURL} action=""/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
             <Link to="/home"  className='nav-item'>home</Link>
             <Link to="/service"  className='nav-item'>service</Link>

            </Nav>
            <Nav>
              <Darkmode className='mx-2 '></Darkmode>
              <Link to="/login" className='nav-item'>
                  signUp
               </Link>
              <Link  to="/login" className='nav-item'>
                  login
               </Link>
            </Nav>
          </Navbar.Collapse>
      
      </Navbar>
    </div>
  );
};

export default Menubar;