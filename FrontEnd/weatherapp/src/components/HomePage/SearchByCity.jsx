import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import axios from "axios";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import cities from '../../cities.json';
import background from "../../assets/background.jpeg";
const SearchByCity = (props) => 
{
  //Constants
  const [cityName,setCityName] =useState("");
  const [loading,setLoading]=useState(false);
  const [showSearch , setShowSearch] = useState(false);
   const baseURL = 'http://localhost:8000/getWeather';
   const handleSubmit = () =>
   {
      console.log(cityName);
      setLoading(true);
      setShowSearch(true);
      
       axios.post(`${baseURL}`, {"cityName":cityName})
       .then((res) => {
           props.setCoordinates({"lat":res.data.lat , "lon":res.data.lon, "name":cityName});
           setLoading(false);
           })
       .catch(err => console.log("ERRORR",err))
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
              <div style={{backgroundImage:`url(${background})`, backgroundSize: '100%',height:'105vh', zIndex: '0', backgroundRepeat : 'repeat-y', overflow:'auto', backgroundPosition:'center'}}>
                <div style={!showSearch ?{paddingTop:'15%'}:{}} className="w-100 d-flex">
                           <div style={{width:"85%", marginLeft:"15%", marginBottom:"0.4%"}}>
                                <ReactSearchAutocomplete
                                        items={cities}
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
                                      </h3> 
                                      :""}
                            </div>
                            <div style={{width:"25%",paddingRight:'17%', paddingTop:'0.25%'}}>
                                 <Button variant="btn btn-primary" onClick={handleSubmit}>Search</Button>
                           </div>
                           
                          </div>
                     {props.children}
                </div>
                  
                );
                }
export default SearchByCity;