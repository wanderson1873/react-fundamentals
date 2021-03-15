import React from 'react'

const Button = ({onClick, user}) => {
   return (
      <button style={{margin: '0.5em'}} onClick={onClick}>{user}</button>
   )
}

export default Button
