import React from 'react';

import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Bebidas from './Bebidas';

const App = () => {

  const { pathname } = window.location;

  let Pagina

  if(pathname === "/") {
    Pagina = Home
  } else if(pathname === "/menu"){
    Pagina = Menu
  } else {
    Pagina = Bebidas
  }

  return (
    <div>
      <Header />
      <Pagina />
    </div>
  )
}

export default App
