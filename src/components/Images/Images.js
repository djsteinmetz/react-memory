import React from 'react'
import './Images.css'

const Images = props => {
    return <img onClick={()=> props.handleClick(props.id)} 
         className="images" src={props.src}
         value={props.id}
         alt="Alphonse Mucha" id={props.id}/>
}

export default Images