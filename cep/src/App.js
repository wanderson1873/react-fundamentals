import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== "null") setProduto(produtoLocal)
  }, [])

  React.useEffect(() => {
    if(produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto])

  function handleClick({target}) {
    setProduto(target.innerText)
  }
  
  return (
    <>
      <p>Preferencia {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>tablet</button>
      <Produto produto={produto} />
    </>
  )
}

export default App
