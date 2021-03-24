import React from 'react'
import { Input } from './Form/Input'
import Radio from './Form/Radio'
import Select from './Form/Select'

const App = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')

  return (
    <form>
      <Radio 
        options={["Azul", "Vermelho", "Laranja"]}
        value={cor}
        setValue={setCor}
      />

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