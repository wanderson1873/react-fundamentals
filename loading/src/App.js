import React from 'react'
import Button from './Button';
import Usuario from './Usuario';

const App = () => {
  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handleClick(event) {
    setLoading(true)

    const response = await fetch(`
    https://api.github.com/users/${event.target.innerText}`)

    const resJson = await response.json()
    setDados(resJson)

    setLoading(false)
  }
  return (
    <div>
      <Button onClick={handleClick} user="wanderson1873" />
      <Button onClick={handleClick} user="diego3g" />

      <p>{loading && 'Carregando...'}</p>
      
      {!loading && dados && <Usuario dados={dados} />}
    </div>
  );
}

export default App;
