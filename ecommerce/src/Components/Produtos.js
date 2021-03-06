import React from 'react'
import Header from './Head'
import { Link } from 'react-router-dom'
import style from './Produtos.module.css'

const Produtos = () => {
   const [produtos, setProdutos] = React.useState(null)

   React.useEffect(() => {
      fetch(`https://ranekapi.origamid.dev/json/api/produto`)
         .then(response => response.json())
         .then(json => setProdutos(json))
   }, [])

   console.log(produtos)
   if(produtos === null) return null
   return (
      <section className={style.prods + " animeLeft"}>
         <Header title={`Loja | Produtos`} description={`Loja | Veja todos nossos produtos`} />

         {produtos.map((produto) => (
            <Link to={`/produto/${produto.id}`} key={produto.id}>
               <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
               <h1 className={style.nome} >{produto.nome}</h1>
            </Link>
         ))}
      </section>
   )
}

export default Produtos
