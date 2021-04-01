import React from 'react'
import Header from './Head'
import { useParams } from 'react-router-dom'
import style from './Produto.module.css'

const Produto = () => {
   const [produto, setProduto] = React.useState(null)
   const [loading, setLoading] = React.useState(false)
   const [error, setError] = React.useState(null)
   const { id } = useParams()

   React.useEffect(() => {
      async function fechProduto(url) {
         try {
            setLoading(true)
            const response = await fetch(url)
            const json = await response.json()
            setProduto(json)
         } catch (erro) {
            setError('Um erro ocorreu')
         } finally {
            setLoading(false)
         }
          

      }
      fechProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
   }, [id])

   if(loading) return <div className="loading"></div>
   if(error) return <p>{error}</p>
   if(produto === null) return null
   return (
      <section className={style.produto + " animeLeft"}>
         <Header title={`Loja | ${produto.nome}`} description={`Loja | ${produto.descricao}`} />
         <div>
            {produto.fotos.map(foto => (
               <img key={foto.src} src={foto.src} alt={foto.titulo}/>
            ))}
         </div>
         <div>
            <h1>{produto.nome}</h1>
            <span className={style.preco}>R$ {produto.preco}</span>
            <p className={style.descricao}>{produto.descricao}</p>
         </div>
         
      </section>
   )
}

export default Produto
