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


let s;
let list = [];
let obj = {};

const NavBar = (props) => {

   const [cityName,setCityName] =useState("");
   const [long,setLong] =useState("");
   const [lat,setLat] =useState("");
   const [lonLat,setLonLat] =useState({});
   const [columns, setColumns] = useState([]);
   const [data, setData] = useState([]);
   const [value,setValue]=useState('');
    const baseURL = 'http://localhost:8000/getWeather';
    // All countries
// length 252


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
  

  
  const OnClick=()=>
  {
    handleSubmit();
   // handleFileUpload('./citiesCountries.csv');
    console.log(list);

  }
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    setCityName(item.name)
    console.log("NAMEEE",item.name);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
    return(
        <>
               
                        <Navbar bg="primary" variant="dark" style={{justifyContent:"space-between", display:"flex",position: "relative"}}>
                            <Container style={{justifyContent:"space-between", display:"flex"}}>
                                <div style={{display:"flex"}}>
                            <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">History</Nav.Link>
                            </Nav>
                            </div>
                            <Form className="d-flex">
                           
                            {/* <FormControl
                            type="text"
                            placeholder="Search By City e.g Cairo"
                            className="form-control"
                            aria-label="Search"
                            onChange={(e)=>{onInput(e)}}
                            /> */}
                            {/* <Button variant="outline-success" onClick={OnClick}>Search</Button> */}
                               </Form>
                           
                            </Container>
                        </Navbar>
                        <div style={{display:'flex'}}>
                       <div style={{width:"85%"}}>
                        <ReactSearchAutocomplete
                                
                                items={cities}
                                // fuseOptions={{ keys: ["country", "name"] }}
                                onSearch={handleOnSearch}
                                onHover={handleOnHover}
                                onSelect={handleOnSelect}
                                onFocus={handleOnFocus}
                                onClear={handleOnClear}
                                styling={{ zIndex: 2 }} 
                                autoFocus
                                // onChange={(e)=>{setCityName(e.taget.value.name)}}
                       
                                    />
                                      </div>
                                      <div style={{width:"25%", marginTop:"0.25%"}}>
                                    <Button variant="btn btn-primary" onClick={handleSubmit}>Search</Button>
                                    </div>
                                    </div>
                </>

    
    );
    
    
    
    
    
    };
    
export default NavBar;