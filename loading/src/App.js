import React from 'react'
import Button from './Button';
import Produto from './Produto'

const App = () => {
const [dados, setDados] = React.useState(null)
const [loading, setLoading] = React.useState(false)

async function handleClick(event) {
  setLoading(true)
  const response = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
  
  const json = await response.json()
  setDados(json)
  console.log(dados)
  setLoading(false)
}
  return (
    <div>
      <Button onClick={handleClick} text="notebook" />
      <Button onClick={handleClick} text="smartphone" />
      <Button onClick={handleClick} text="tablet" />
      <p>{loading && 'Carregando...'}</p>
      {!loading && dados && <Produto dados={dados}/>}
    </div>
  );
}

export default App;
