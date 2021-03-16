import React from 'react'
import Produto from './Produto'

const App = () => {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== 'null') setProduto(produtoLocal)
  }, [])

  React.useEffect(() => {
    if(produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto])
  function handleClick({target}) {
      setProduto(target.innerText)
  }
  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button style={{margin: '0.5em'}} onClick={handleClick}i>notebook</button>
      <button style={{margin: '0.5em'}} onClick={handleClick}i>tablet</button>
      <Produto produto={produto}/>
    </div>
  );
}

export default App;
