import React from 'react';

const App = () => {

  const { pathname } = window.location;

  let Pagina
  if(pathname === "/") {
    Pagina = Home
  } else {
    Pagina = Bebidas
  }
  return (
    <div>
      
    </div>
  )
}

export default App
