import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const cities = ['paris', 'new york', 'tokyo', 'seoul']
  const [weather, setWeather] = useState(null)
  const [weathermain, setweathermain] = useState(null)
  const [city, setCity] = useState('')
  const [loading, setloading] = useState(true);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherBycurrentLocation(lat, lon);
    })}; 
  const getWeatherBycurrentLocation = async (lat, lon) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5ade4f25cb6857941cd069d0d05cd431&units=metric`
      setloading(true)
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data)
      setloading(false)
    }
    const getWeatherByCity = async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ade4f25cb6857941cd069d0d05cd431&units=metric`
      setloading(true)
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data)
      setloading(false)
    }
  useEffect(() => {
      if(city == ""){
        getCurrentLocation()
      } else {
        getWeatherByCity()
      }
  },[city])
  
  return (
    <div>
      {loading?
        <div className='container'>
          <ClipLoader color="#f88c6b" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/>
        </div>:
        <div className='container'>
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} />
      </div>}
    </div>
  );
}

export default App;
