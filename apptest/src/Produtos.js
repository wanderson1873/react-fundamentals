import React from 'react'
import Produto from './Produto';
import Title from './Title'

const produtos = [
   { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
   { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
 ];

function Produtos() {
   return (
      <section>
         <Title texto="Produtos" />
         {produtos.map((produto) => (
            <Produto key={produto.nome} {...produto} />
         ))}
      </section>
   )
}

export default Produtos
