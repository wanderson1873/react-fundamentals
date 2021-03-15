import React from 'react'
import Title from './Title'

function Bebidas() {
   const menus = [
      { 
         title: "Vinho Tinto",
         items: [
            { 
               name: "Periquita",
               price: "20"
            },
            { 
               name: "Esporão",
               price: "25"
            },
            { 
               name: "Rola",
               price: "30"
            },
         ]
      },
   ]
   return (
      <div>
         {menus.map((menu) => (
            <div key={menu.title}>
               <Title text={menu.title} />
               <ul>
                  {menu.items.map((item) => (
                     <li key={item.name}>{item.name} €{item.price},00</li>
                  ))}
               </ul>
            </div>
         ))}
      </div>
   )
}

export default Bebidas
