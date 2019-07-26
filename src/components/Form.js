import React, { useState } from 'react'

const Form = (props) => {

    const initialFormState = { city: '', country: '' }
    const [request, setRequest] = useState(initialFormState)    

    const handleSubmit = event => {
        event.preventDefault()

        if(!request.city || !request.country) return
      
        props.fecther(request)
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRequest({ ...request, [name]: value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h5>SEARCH WEATHER</h5>
            <div>
                <label>City:</label>
                <input type="text" name="city" value={request.city} onChange={handleInputChange} />
            </div>
            <div>
                <label>Country:</label>
                <input type="text" name="country" value={request.country} onChange={handleInputChange} />
            </div>
            <button type="submit">Get Weather</button>
        </form>
    )

}

export default Form
