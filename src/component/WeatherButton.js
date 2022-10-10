import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  return (
    <div>
        <Button variant="warning" onClick={() => {window.location.href='/'}}>Current Location</Button>
        {cities.map((item, index) => (
          <Button variant="warning" onClick={() => setCity(item)}>{item}</Button>
        ))}
    </div>
  )
};

export default WeatherButton