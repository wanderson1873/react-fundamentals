import React from 'react'

function Produto({produto}) {
   const [dados, setDados] = React.useState(null)

   React.useEffect(() => {
      if(produto !== null) {
         fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`).then((response) => response.json()).then((json) => setDados(json))
         console.log(dados)
      }
   }, [produto])
   
   if(dados === null) return null
   return (
      <div>
         <p>{dados.nome}</p>
         <p>{dados.preco}</p>
         
      </div>
   )
}

export default Produto
