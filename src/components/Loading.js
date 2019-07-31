import React from 'react'

const Loading = (props) => {

    return(
        <div className="Loading">
            { props.nogif ? null : <div className="gif"></div> }
            { props.message ? <h1>{props.message}</h1> : null }            
        </div>
    )
}

export default Loading
