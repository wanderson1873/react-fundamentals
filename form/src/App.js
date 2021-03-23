import React from 'react'

const formFilds = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'CEP',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  }
]

const App = () => {
  const [response, setResponse] = React.useState(null)
  const [form, setForm] = React.useState(
    formFilds.reduce((acc, field) => {
      return {...acc, [field.id]: ''}
    }, {})
  )

  function handleChange({target}) {
    const { id, value } = target
    setForm({...form, [id]: value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    }).then((response) => {
      console.log(response)
      setResponse(response)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
     {formFilds.map(({id, label, type}) => (
       <div key={id}>
         <label htmlFor={id}>{label}</label>
         <input type={type} id={id} value={form[id]} onChange={handleChange}/>
       </div>
     ))}
     <button>Enviar</button>
     {response && response.ok && <p>Enviado com sucesso.</p>}
    </form>
  );
}

export default App;
