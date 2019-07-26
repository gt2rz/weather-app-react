import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import WeatherDetails from './components/WeatherDetails'

const API_KEY = "cc86a25e82d8001abee3b2476144e005"

const App = () => {

  const [weather, setWeather] = useState(null)

  const getWeather = async (request) => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${request.city},${request.country}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather(JSON.parse(JSON.stringify(data)))
      })
  }  

  return (
    <div id="root">
      <section className="title">
        <h1>WEATHER <strong>APP</strong></h1>
        <h5>Check the weather in one place  </h5>
      </section>
      <section className="results">
        <Form API_KEY={API_KEY} fecther={getWeather} />  
        {weather !== null ?
           weather.cod===200 ?
            <WeatherDetails data={weather} />
          : <h1>City Not Found</h1>
        : null}    
      </section>      
    </div>
  );
}

export default App;
