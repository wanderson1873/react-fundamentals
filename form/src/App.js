import React from 'react'
import Input from './Form/Input'

const App = () => {
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState('')

  function validadeCep(value) {
    if(value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if(!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido.')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({target}) {
    validadeCep(target.value)
  }

  function handleChange({target}) {
    if(error) validadeCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(validadeCep(cep)){
      console.log("Enviar")
    } else {
      console.log("Não Enviar")
    }

  }
 
  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        id="cep" 
        label="CEP" 
        value={cep} 
        setValue={setCep}
        placeholder="12345-123"  
        onBlur={handleBlur} 
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App