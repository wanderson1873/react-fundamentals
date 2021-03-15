import React from 'react'
import Title from './Title'

const menus = [
   { 
      title: "Carnes",
      items: [
         { 
            name: "Entrecote",
            price: "20"
         },
         { 
            name: "Fraldinha",
            price: "25"
         },
         { 
            name: "Lombo Galego",
            price: "30"
         },
      ]
   },
]
function Menu() {
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

export default Menu
