import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import WeatherDetails from './components/WeatherDetails'

const API_KEY = "cc86a25e82d8001abee3b2476144e005"

const App = () => {

  const [weather, setWeather] = useState(null)
  const [request, setRequest] = useState([])
  const [loading, setLoading] = useState(false)
  const [animateForm, setAnimateForm] = useState("")
  const [animateWeatherDetails, setAnimateWeatherDetails] = useState("")
  const [error, setError] = useState("")

  const getWeather = async (request) => {
    setRequest(request)
    setLoading(true)
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${request.city},${request.country}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {        
        setAnimateForm("animateHideForm")
        setAnimateWeatherDetails("animateShowDetails")
        setWeather(JSON.parse(JSON.stringify(data)))
        setLoading(false)
      })
  }

  const onBack = (event) => {
    setAnimateForm("animateShowForm")
    setAnimateWeatherDetails("animateHideDetails")
    setError("hide")
  }

  return (
    <div id="root">
      <section className="title">
        <h1>WEATHER <strong>APP</strong></h1>
        <h5>Check the weather in one place  </h5>
        <h6>@gt2rz | Powered by <strong>ReactJS | 2019</strong></h6>
      </section>
      <section className="results">
        <Form className={animateForm} API_KEY={API_KEY} fecther={getWeather} loader={loading} />
        {
          loading ? null
            : weather !== null ?
              weather.cod === 200 ?
                <WeatherDetails className={animateWeatherDetails} data={weather} onBack={onBack} request={request}/>
                : <div className={`msgError ${error}`}>
                    <h1 className="error">City Not Found</h1>
                    <button className="errorBack"onClick={onBack}> BACK </button>
                  </div>
              : null
        }
      </section>
    </div>
  );
}

export default App;
