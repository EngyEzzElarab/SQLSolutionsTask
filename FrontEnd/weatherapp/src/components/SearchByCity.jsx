import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useHistory } from "react-router-dom"
import cities from '../cities.json';

let s;
let list = [];
let obj = {};

const SearchByCity = (props) => 
{

  const [cityName,setCityName] =useState("");
  const [long,setLong] =useState("");
  const [lat,setLat] =useState("");
  const [lonLat,setLonLat] =useState({});
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false);

   const baseURL = 'http://localhost:8000/getWeather';



   const onInput=(e)=>
   {
       setCityName(e.target.value);
       console.log(cityName);
   }
   const handleSubmit = () =>
   {
      
      console.log(cityName);
      setLoading(true);
      props.setShowSearch(true);
      
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
           setLoading(false);
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
            return(
              <div style={{display:'flex'}}>
              <div style={{width:"85%", marginLeft:"15%", marginTop:"0.5%", marginBottom:"0.4%"}}>
              
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
                      placeholder="City Name e.g Paris"
                      onChange={(e)=>{setCityName(e.taget.value.name)}}
              
                          />
                            {loading ?
                             <h3>
                                Loading...
                              </h3> :""}
                            </div>
                            <div style={{width:"25%", marginTop:"0.75%", marginTop:"0.5%",paddingRight:'17%', paddingTop:'0.25%'}}>
                          <Button variant="btn btn-primary" onClick={handleSubmit}>Search</Button>
                          </div>
                          </div>
                  
                );
                }
export default SearchByCity;