import React from 'react'

function Produto({nome, propriedades}) {
   return (
      <div style={{ border: '1px solid', padding: '1em', margin: '1em' }}>
         { nome}
         <ul>
            {propriedades.map((propriedade) => (
               <li key={propriedade}>{propriedade}</li>
            ))}
         </ul>
      </div>
   )
}

export default Produto
