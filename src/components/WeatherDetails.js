import React from 'react'

const WeatherDetails = (props) => {
    const icon = (ico) =>{
        console.log(ico)
        return "http://openweathermap.org/img/wn/" + ico + "@2x.png"
    }

    const onBack = (event) =>{
        props.onBack(event);
    }

    return (
        <div className={`weatherDetails ${props.className}`}>
            <ul>
                <h2>Today Weather</h2>
                <small className="request">{props.request.city}, {props.request.country}</small>
                {
                    props.data.weather.map(
                        param => (
                            <li className="icon">                                
                                <img className="weatherIcon"src={icon(param.icon)} alt="icon"/> <span>{param.main}, {param.description}</span>
                            </li>                            
                        )
                    )
                }
                <li><strong>Temperature:</strong>{props.data.main.temp} °C</li>
                <li><strong>Minimum temperature:</strong>{props.data.main.temp_min} °C</li>
                <li><strong>Maximun temperature:</strong>{props.data.main.temp_max} °C</li>
                <li><strong>Atmospheric pressure:</strong>{props.data.main.pressure} hPa</li>
                <li><strong>Humidity:</strong>{props.data.main.humidity}%</li>                
                <li><strong>Wind speed:</strong>{props.data.wind.speed} meter/sec</li>
                <li><strong>Wind direction:</strong>{props.data.wind.deg}°</li>
                <li><strong>Cloudiness:</strong>{props.data.clouds.all}%</li>
            </ul>
            <button onClick={onBack}> BACK </button>
        </div>
    )
}

export default WeatherDetails