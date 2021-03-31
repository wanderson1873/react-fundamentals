import React from 'react'
import Head from './Head'
import style from './Contato.module.css'
import foto from '../img/contato.jpg'

const Contato = () => {
   return (
      <section className={style.contato + " animeLeft"}>
         <Head title="Loja | Contato"  description="Entre em contato com a nossa loja"/>
         <img src={foto} alt="Maquina de escrever"/>

         <div>
            <h1>Entre em contato</h1>
            <ul className={style.dados}>
               <li>wanderson@loja.com</li>
               <li>9999-9999</li>
               <li>Rua Ali Perto, 46</li>
            </ul>
         </div>
         
      </section>
   )
}

export default Contato
