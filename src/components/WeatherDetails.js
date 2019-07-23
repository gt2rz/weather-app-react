import React from 'react'

const WeatherDetails = (props) => {
    const icon = (ico) =>{
        console.log(ico)
        return "http://openweathermap.org/img/wn/" + ico + "@2x.png"
    }

    return (
        <div className="weatherDetails">
            <ul>
                <h2>Weather</h2>
                {
                    props.data.weather.map(
                        param => (
                            <li>                                
                                <img src={icon(param.icon)} alt="icon"/> <span>{param.main}, {param.description}</span>
                            </li>                            
                        )
                    )
                }
                <li><strong>Temperature(°C):</strong>{props.data.main.temp}</li>
                <li><strong>Atmospheric pressure (hPa):</strong>{props.data.main.pressure}</li>
                <li><strong>Humidity (%):</strong>{props.data.main.humidity}</li>
                <li><strong>Minimum temperature (°C):</strong>{props.data.main.temp_min}</li>
                <li><strong>Maximun temperature (°C):</strong>{props.data.main.temp_max}</li>
                <li><strong>Wind speed (meter/sec):</strong>{props.data.wind.speed}</li>
                <li><strong>Wind direction (°):</strong>{props.data.wind.deg}</li>   
                <li><strong>Cloudiness (%):</strong>{props.data.clouds.all}</li>
            </ul>
        </div>
    )
}

export default WeatherDetails