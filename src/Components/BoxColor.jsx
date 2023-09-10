import React from 'react'
import './BoxColor.css'

function BoxColor(props) {
    console.log(props)
  const boxStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    color: `${props.color}`
  }
          
  return (
    
    <div className="BoxColor" style={boxStyle}>
        <p>rgb({props.r},{props.g},{props.b})</p>    
        <p>{props.hex}</p>
    </div>
  )
}


export default BoxColor