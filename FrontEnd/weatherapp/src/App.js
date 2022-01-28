import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import  NavBar from "./NavBar";
import React, { useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import  NavBar from "./components/NavBar"
import ViewHistory from "./components/ViewHistory"
import SearchByCity from "./components/SearchByCity"
import  ControlledCarousel from "./components/ControlledCarousel"
import background from "./assets/background.jpeg";

function App() {

  const [coordinates, setCoordinates]= useState({});
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '5b912a7d8128b17e6099ba2d882d0606',
    lat: coordinates.lat,
    lon: coordinates.lon,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  const [showSearch , setShowSearch] = useState(false);

  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };
  return (
    <div className="App">
      
      <NavBar/>
            <Switch>
                      <Route exact path='/'>
                      {/* isLoading ? {marginTop:'15%'}: {} */}
                          <div style={{backgroundImage:`url(${background})`, backgroundSize: '100%',height:'150vh', zIndex: '0', backgroundRepeat : 'repeat-y'}} className="flex-column justify-content-center align-items-center">
                          <div style={ !showSearch? {Top:'15%'}: {}}>
                            <SearchByCity setCoordinates = {setCoordinates} setShowSearch = {setShowSearch}/>
                            </div>
                            <div style={{marginTop:'3%'}}>
                            <ReactWeather
                                theme={customStyles}
                                isLoading={isLoading}
                                errorMessage={errorMessage}
                                data={data}
                                lang="en"
                                locationLabel={coordinates.name}
                                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                                showForecast
                              />
                              </div>
                              </div>
                      </Route>
                        
                       
                      <Route exact path='/history'>
                      <div style={{backgroundImage:`url(${background})`, backgroundSize: '100%', zIndex: '0',height:'100%', backgroundRepeat : 'repeat-y'}} className="flex-column justify-content-center align-items-center">
                              <ViewHistory />
                            </div>
                          
                      </Route>
            </Switch>
    </div>
   
  );
}

export default App;
