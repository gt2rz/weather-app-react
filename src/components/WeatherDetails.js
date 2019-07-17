import React from 'react'

const WeatherDetails = (props) => {
    return (
        <div className="weatherDetails">
            <section>
                <h2>Coordenate</h2>
                <label><strong>Latitude:</strong>{props.data.coord.lat}</label>
                <label><strong>Longitude:</strong>{props.data.coord.lon}</label>
            </section>
            <section>
                <h2>Weather</h2>
                {
                    props.data.weather.map(
                        param => (
                            <div>
                                <label><strong>Parameters:</strong>{param.main}</label>
                                <label><strong>Description:</strong>{param.description}</label>
                                <label><strong>Ico:</strong>{param.icon}</label>
                            </div>                            
                        )
                    )
                }
            </section>
            <section>
                <h2>Main</h2>
                <label><strong>Temperature(°C):</strong>{props.data.main.temp}</label>
                <label><strong>Atmospheric pressure (hPa):</strong>{props.data.main.pressure}</label>
                <label><strong>Humidity (%):</strong>{props.data.main.humidity}</label>
                <label><strong>Minimum temperature (°C):</strong>{props.data.main.temp_min}</label>
                <label><strong>Maximun temperature (°C):</strong>{props.data.main.temp_max}</label>
            </section>
            <section>
                <h2>Wind</h2>
                <label><strong>Wind speed (meter/sec):</strong>{props.data.wind.speed}</label>
                <label><strong>Wind direction (°):</strong>{props.data.wind.deg}</label>   
                <label><strong>Cloudiness (%):</strong>{props.data.clouds.all}</label>             
            </section>

        </div>
    )
}

export default WeatherDetails