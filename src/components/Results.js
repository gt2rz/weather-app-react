import React from 'react'

import Form from './components/Form'
import WeatherDetails from './components/WeatherDetails'
import Error from './components/Error'

const Results = () => {
    return(
        <section className="results">
            <Form className={animateForm} API_KEY={API_KEY} fecther={getWeather} loader={loading} />
            {
            loading ? null
                : weather !== null ?
                weather.cod === 200 ?
                    <WeatherDetails className={animateWeatherDetails} data={weather} onBack={onBack} request={request}/>
                    : <Error className={`msgError ${error}`} message={"City Not Found"} onBack={onBack} />
                : null
            }
        </section>
    )
}

export default Results
