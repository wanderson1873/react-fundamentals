import React from 'react'
import Input from './Form/Input'
import useForm from './Hooks/useForm'

const App = () => {
  const cep = useForm('cep')
  const email = useForm('email')
  const name = useForm('name')

  function handleSubmit(event) {
    event.preventDefault()
    if(name.validate() && email.validate() && cep.validate()) {
      console.log("Enviar")
    } else {
      console.log("Não enviar")
    }
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        id="name" 
        label="Nome" 
        {...name}
      />
      <Input 
        type="text" 
        id="cep" 
        label="CEP" 
        placeholder="12345-123"  
        {...cep}
      />
      <Input 
        type="text" 
        id="email" 
        label="Email" 
        {...email}
      />
      <button>Enviar</button>
    </form>
  )
}

export default App