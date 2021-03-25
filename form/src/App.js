import React from 'react'
import Input from './Form/Input'

const App = () => {
  const [cep, setCep] = React.useState('')
  const [error, setErros] = React.useState('')
 
  return (
    <form>
      <Input 
        type="text" 
        id="cep" 
        label="CEP" 
        value={cep} 
        placeholder="0000-000"   
        setValue={setCep}
      />
      {cep}
    </form>
  )
}

export default App