import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem


const App = () => {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  const dados = mario;

  const total = dados.compras.map((item) => Number(item.preco.replace("R$ ", ""))).reduce((a, b) => a +b)
  console.log(total)
  return (<div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>Situacao: <span style={{color: dados.ativa ? 'green' : 'red'}}> {dados.ativa ? 'Ativo' : 'Inativo'}</span></p>
    <p>Total gasto R$ {total}</p>
    <p>{total > 10000 && " você está gastando muito!"}</p>
  </div>);
};

export default App
