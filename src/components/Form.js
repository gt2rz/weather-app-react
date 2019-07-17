import React, { useState } from 'react'

const Form = (props) => {

    const initialFormState = { city: '', country: '' }
    const [request, setRequest] = useState(initialFormState)

    const getWeather = async (request) => {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${request.city},${request.country}&appid=${props.API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                props.updater(data)
            })
    }

    const handleSubmit = event => {
        event.preventDefault()

        if(!request.city || !request.country) return

        getWeather(request)        
        // setRequest(initialFormState)
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRequest({ ...request, [name]: value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>City:</label>
            <input type="text" name="city" value={request.city} onChange={handleInputChange} />
            <label>Country:</label>
            <input type="text" name="country" value={request.country} onChange={handleInputChange} />
            <button type="submit">Get Weather</button>
        </form>
    )

}

export default Form
