import React from 'react'

const Error = (props) => {
    return(
        <div className={`msgError ${props.className}`}>
            <h1 className="error">{props.message}</h1>
            <button className="errorBack"onClick={props.onBack}> BACK </button>
        </div>
    )
}

export default Error
