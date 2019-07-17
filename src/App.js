import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'

const API_KEY = "cc86a25e82d8001abee3b2476144e005"

const App = () => {

  const [weather, setWeather] = useState([])

  const updateWeatherData = (weatherData) => {
    setWeather([ ...weather, JSON.stringify(weatherData) ])
  }

  return (
    <div className="root">
      <Form API_KEY={API_KEY} updater={updateWeatherData}></Form>
      {weather.map(
        w => <div>{w.coord}</div>
      )}
      

          <div>
            latitude:{weather.coord}
          </div>

      

    </div>
  );
}

export default App;
