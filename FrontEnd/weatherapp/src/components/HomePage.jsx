// import React, { useState } from "react";
// import ReactWeather, { useOpenWeather } from 'react-open-weather'; 

// function HomePage(props) {
//                     const [latLong , setLatLong] = useState({});
//                     const { data, isLoading, errorMessage } = useOpenWeather({
//                     key: '5b912a7d8128b17e6099ba2d882d0606',
//                     lat: latLong.lat,
//                     lon: latLong.long,
//                     lang: 'en',
//                     unit: 'metric', // values are (metric, standard, imperial)
//                 });

//                 const customStyles = {
//                     fontFamily:  'Helvetica, sans-serif',
//                     gradientStart:  '#0181C2',
//                     gradientMid:  '#04A7F9',
//                     gradientEnd:  '#4BC4F7',
//                     locationFontColor:  '#FFF',
//                     todayTempFontColor:  '#FFF',
//                     todayDateFontColor:  '#B5DEF4',
//                     todayRangeFontColor:  '#B5DEF4',
//                     todayDescFontColor:  '#B5DEF4',
//                     todayInfoFontColor:  '#B5DEF4',
//                     todayIconColor:  '#FFF',
//                     forecastBackgroundColor:  '#FFF',
//                     forecastSeparatorColor:  '#DDD',
//                     forecastDateColor:  '#777',
//                     forecastDescColor:  '#777',
//                     forecastRangeColor:  '#777',
//                     forecastIconColor:  '#4BC4F7',
//                 };
//                 return (
//                     <div className="App">
//                     {/* <SearchByCity /> */}
//                     <ReactWeather
//                     theme={customStyles}
//                     isLoading={isLoading}
//                     errorMessage={errorMessage}
//                     data={data}
//                     lang="en"
//                     locationLabel="Berlin"
//                     unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
//                     showForecast
//                     />
//                     </div>
//                 );
//                 }
//                 export default HomePage;