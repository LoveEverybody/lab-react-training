import React from 'react'
import './IdCard.css'

function Greetings(props) {
    //   console.log(props.lang)
    let greeting = ""

    if (props.lang === "de") {
        greeting = "Hallo"
      } else if (props.lang === "en") {
        greeting = "Hello"
      } else if (props.lang === "es") {
        greeting = "Hola"
      } else if (props.lang === 'fr') {
        greeting = "Bonjour"
      }

    return (
           <div className='IdCard'>
                <h1>{greeting} {props.children}</h1>
           </div>
    )
}

export default Greetings