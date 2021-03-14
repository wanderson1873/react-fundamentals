import React from 'react';

import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {

  const { pathname } = window.location;
  console.log(pathname)

  let Pagina
  if(pathname === "/") {
    Pagina = Home
  } else {
    Pagina = Produtos
  }
  return (
    <div>
      <Header />
      <Pagina />
    </div>
  )
}

export default App
