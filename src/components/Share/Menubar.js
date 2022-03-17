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
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className='container'>
       
        
            <img alt='' className='rounded-pill' width="18px" height="18px" src={user.photoURL} action=""/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             <Link to="/home">home</Link>

            </Nav>
            <Nav>
              <Darkmode></Darkmode>
              <Nav.Link href="#deets">sign up</Nav.Link>
              <Link to="/login">
                  login 
               </Link>
            </Nav>
          </Navbar.Collapse>
      
      </Navbar>
    </div>
  );
};

export default Menubar;