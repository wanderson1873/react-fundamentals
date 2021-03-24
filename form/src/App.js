import React from 'react'
import { Input } from './Form/Input'
import Select from './Form/Select'

const App = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')

  return (
    <form>
      <Select 
        options={["notebook", "tablet", "smartphone"]}
        value={produto}
        setValue={setProduto}
      />
      
      <Input id="name" label="Nome" value={name} setValue={setName} />
      <Input 
        id="email" 
        label="Email" 
        value={email} 
        setValue={setEmail} 
        placeholder="exemplo@email.com" 
        required
      />
      <button>Enviar</button>
    </form>
  )
}

export default App