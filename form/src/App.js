import React from 'react'
import Checkbox from './Form/Checkbox'
import { Input } from './Form/Input'
import Radio from './Form/Radio'
import Select from './Form/Select'

const App = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [fruta, setFruta] = React.useState('')

  return (
    <form>
      <Checkbox 
        options={["Uva", "Manga"]}
        value={fruta}
        setValue={setFruta}
      />
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