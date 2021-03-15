import React from 'react'

const Usuario = ({dados}) => {
   return (
      <div>
         <p>{dados.name}</p>
         <p>{dados.bio}</p>
      </div>
   )
}

export default Usuario
