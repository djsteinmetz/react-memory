import React from 'react'
import './StartBtn.css'

const StartBtn = props => {
    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-dark btn-lg" {...props}>{props.children}</button>
        </div> 
    )
}

export default StartBtn