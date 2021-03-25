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
 
  return (
    <form>
      <Input 
        type="text" 
        id="cep" 
        label="CEP" 
        value={cep} 
        setValue={setCep}
        placeholder="0000-000"  
        onBlur={handleBlur} 
      />
      {error && <p>{error}</p>}
    </form>
  )
}

export default App