import React from 'react'

const WeatherBox = ({weather}) => {
  let Fahrenheit = (((weather?.main.temp) * 1.8) + 32).toFixed(2)
  return (
    <div className='weather-box'>
        <div className='weather-country'>{weather?.name}</div>
        <h2>{weather?.main.temp}°C / {Fahrenheit}°F</h2>
        <h3>{weather?.weather[0].description}</h3> 
    </div>
  )
}

export default WeatherBox