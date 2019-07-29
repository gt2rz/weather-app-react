import React, { useState } from 'react'

import Form from './Form'
import WeatherDetails from './WeatherDetails'
import Error from './Error'

const Results = (props) => {

    const [weather, setWeather] = useState(null)
    const [request, setRequest] = useState([])
    const [loading, setLoading] = useState(false)
    const [animateForm, setAnimateForm] = useState("")
    const [animateWeatherDetails, setAnimateWeatherDetails] = useState("")
    const [error, setError] = useState("")

    const getWeather = async (request) => {
        setRequest(request)
        setLoading(true)
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${request.city},${request.country}&appid=${props.API_KEY}&units=metric`)
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
        <section className="results">
            <Form className={animateForm} fecther={getWeather} loader={loading} />
            {
                loading ? null
                    : weather !== null ?
                        weather.cod === 200 ?
                            <WeatherDetails className={animateWeatherDetails} data={weather} onBack={onBack} request={request} />
                            : <Error className={`msgError ${error}`} message={"City Not Found"} onBack={onBack} />
                        : null
            }
        </section>
    )
}

export default Results
