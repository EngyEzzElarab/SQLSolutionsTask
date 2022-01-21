import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import  NavBar from "./NavBar";
import React, { useState } from "react";
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import  NavBar from "./components/NavBar"

function App() {

  const [coordinates, setCoordinates]= useState({});
  // const handleCallback = (childData)=>
  // {
  //     console.log("reached handle call back");
  //     setLonLat(childData.value);
  // }
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '5b912a7d8128b17e6099ba2d882d0606',
    lat: coordinates.lat,
    lon: coordinates.lon,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

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
      <NavBar setCoordinates = {setCoordinates}/>
      {/* <Search /> */}
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
  );
}

export default App;
