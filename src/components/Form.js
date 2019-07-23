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
            <h3>SEARCH</h3>
            <label>City:</label>
            <input type="text" name="city" value={request.city} onChange={handleInputChange} />
            <label>Country:</label>
            <input type="text" name="country" value={request.country} onChange={handleInputChange} />
            <button type="submit">Get Weather</button>
        </form>
    )

}

export default Form
