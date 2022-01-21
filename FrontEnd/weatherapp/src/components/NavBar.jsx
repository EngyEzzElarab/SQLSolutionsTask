import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import axios from "axios";

let s;

const NavBar = (props) => {

   const [cityName,setCityName] =useState("");
   const [long,setLong] =useState("");
   const [lat,setLat] =useState("");
   const [lonLat,setLonLat] =useState({});
    const baseURL = 'http://localhost:8000/getWeather';

    const onInput=(e)=>
    {
        setCityName(e.target.value);
        console.log(cityName);
    }
    const handleSubmit = () =>
    {
       
       console.log(cityName);
        axios.post(`${baseURL}`, {"cityName":cityName})
        .then((res) => {
           
            setLat(res.data.lat);
            setLong(res.data.lon);
            console.log("LAT",res.data.lat);
            console.log("LAT2",lat);
            console.log("LON",res.data.lon);
            console.log("LON2",long);
            setLonLat({"lat":res.data.lat , "lon":res.data.lon});
            props.setCoordinates({"lat":res.data.lat , "lon":res.data.lon, "name":cityName});
            })
        .catch(err => console.log("ERRORR",err))
    }
  

    return(
        <>
               
                        <Navbar bg="primary" variant="dark" style={{justifyContent:"space-between", display:"flex"}}>
                            <Container style={{justifyContent:"space-between", display:"flex"}}>
                                <div style={{display:"flex"}}>
                            <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">History</Nav.Link>
                            </Nav>
                            </div>
                            <Form className="d-flex">
                            <FormControl
                            type="text"
                            placeholder="Search By City e.g Cairo"
                            className="form-control"
                            aria-label="Search"
                            onChange={(e)=>{onInput(e)}}
                            />
                            <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
                               </Form>
                           
                            </Container>
                        </Navbar>

        
                </>

    
    );
    
    
    
    
    
    };
    
export default NavBar;