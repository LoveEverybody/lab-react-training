import React from 'react'
import './IdCard.css'

function IdCard(props) {
       
    return (
      
        <div className="IdCard">
     
            <img src={props.picture} alt="" />
            <div className="right">
                <strong>First name</strong>: {props.firstName} <br />
                <strong>Last name</strong>: {props.lastName} <br />
                <strong>Gender</strong>: {props.gender} <br />
                <strong>Height</strong>: {props.height / 100}m <br />
                <strong>Birth</strong>: {props.birth} <br />
            </div>
        </div>

    )
}

export default IdCard