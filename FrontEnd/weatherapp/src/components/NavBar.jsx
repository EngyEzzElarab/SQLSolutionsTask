import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import cities from '../cities.json';
import { useHistory } from "react-router-dom"


let s;
let list = [];
let obj = {};

const NavBar = () => {

   const history = useHistory();
  
    return(
        <>
               
                        <Navbar bg="primary" variant="dark" style={{justifyContent:"space-between", display:"flex",position: "relative"}}>
                            <Container style={{justifyContent:"space-between", display:"flex"}}>
                                <div style={{display:"flex"}}>
                            <Navbar.Brand onClick={() => history.push('/')}>Weather App</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link  onClick={() => history.push('/')} >Home</Nav.Link>
                            <Nav.Link  onClick={() => history.push('/history')} >History</Nav.Link>
                            </Nav>
                            </div>
                            <Form className="d-flex">
                           
                               </Form>
                           
                            </Container>
                        </Navbar>
                       
                </>

    
    );
    
    
    
    
    
    };
    
export default NavBar;