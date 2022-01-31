import ReactWeather, { useOpenWeather } from 'react-open-weather';

  const DisplayWeather = (props) => 
  {
    const { data, isLoading, errorMessage } = useOpenWeather(
        {
          key: '5b912a7d8128b17e6099ba2d882d0606',
          lat: props.coordinates.lat,
          lon: props.coordinates.lon,
          lang: 'en',
          unit: 'metric', // values are (metric, standard, imperial)
        }
        );
        console.log(data);
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
      console.log(props.coordinates)
      return(
                <div style={{marginTop:'3%'}}>
                     <ReactWeather
                            theme={customStyles}
                            isLoading={isLoading}
                            errorMessage={errorMessage}
                            data={data}
                            lang="en"
                            locationLabel={props.coordinates.name}
                            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                            showForecast
                            />
                </div>
      );

  }
  export default DisplayWeather;