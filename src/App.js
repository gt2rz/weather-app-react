import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import WeatherDetails from './components/WeatherDetails'

const API_KEY = "cc86a25e82d8001abee3b2476144e005"

const App = () => {

  const [weather, setWeather] = useState(null)

  const getWeather = async (request) => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${request.city},${request.country}&appid=${API_KEY}&units=metric&lang=es`)
      .then(response => response.json())
      .then(data => {
        setWeather(JSON.parse(JSON.stringify(data)))
      })
  }  

  return (
    <div className="root">
      <section className="title">
        <h1>WEATHER APP</h1>
        <h2>loremIpsum  </h2>
      </section>
      <section>
        <Form API_KEY={API_KEY} fecther={getWeather} />      
        {
          weather === null ? <h1></h1> : <WeatherDetails data={weather} />
        }
      </section>      
    </div>
  );
}

export default App;
