import React from 'react'
import "./IdCard.css"

function Random(props) {
  return (
    <div className='IdCard'>
        <h1>Random value between {props.min} and {props.max} => {Math.floor(Math.random() * props.max)}</h1>
    </div>
  )
}

export default Random