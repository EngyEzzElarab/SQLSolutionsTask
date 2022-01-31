import React, { useState } from "react";
import { Switch, Route} from 'react-router-dom'
import  NavBar from "./components/NavBar"
import ViewHistory from "./components/HistoryPage/ViewHistory"
import SearchByCity from "./components/HomePage/SearchByCity"
import DisplayWeather from "./components/HomePage/DisplayWeather";

function App() {
  const [coordinates, setCoordinates]= useState({});
  return (
        <div className="App">
                   <NavBar/>  
                    <Switch>
                              <Route exact path='/'>
                                    <SearchByCity setCoordinates = {setCoordinates} >
                                        <DisplayWeather  coordinates = {coordinates}/>
                                    </SearchByCity>      
                              </Route>  
                              <Route exact path='/history'>
                                      <ViewHistory />   
                              </Route>
                    </Switch>
        </div>
   
  );
}

export default App;
