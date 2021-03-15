import React from 'react'

const Button = ({onClick, text}) => {
   return (
      <button style={{margin: '0.5em'}} onClick={onClick}>{text}</button>
   )
}

export default Button
