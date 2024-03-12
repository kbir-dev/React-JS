import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className='card'>
        <p>{props.id}</p>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default Cards
