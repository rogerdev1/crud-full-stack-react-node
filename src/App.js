import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './App.css';
import Card from './components/Card/Card';

function App() {

  const [values, setValues] = useState()
  const [lista, setLista] = useState()
  console.log(lista)

  useEffect(() => {
    Axios.get('http://localhost:7000/getCards')
      .then( response => setLista(response.data))
  }, [])

  const handleChangeValues = e => {
    setValues( prevValue => ({
      ...prevValue, [e.target.name]: e.target.value,
    }))
  }

  const cadastrarItem = () => (
    Axios.post('http://localhost:7000/cadastrar', {
      nome: values.nome,
      preco: values.preco,
      categoria: values.categoria,
    }).then(() => alert('Cadastrado com sucesso'))
  )

  return (
    <div className="App">
      <h1>CRUD Full Stack</h1>
      <form>
        <input
          type='text'
          name='nome'
          placeholder='Nome'
          onChange={handleChangeValues}
        />
        <input
          type='text'
          name='preco'
          placeholder='Preço'
          onChange={handleChangeValues}

        />
        <input
          type='text'
          name='categoria'
          placeholder='Categoria'
          onChange={handleChangeValues}

        />
        <button type='submit' onClick={(e) => {
          e.preventDefault()
          cadastrarItem()
          //alert('Cadastrado com sucesso')
          document.location.reload()
        }}>Cadastrar</button>
      </form>
      <ul id='listaItens'>
      {typeof lista !== "undefined" &&
        lista.map( item => {
          return (
            <Card
              key={item.id}
              lista={lista}
              setLista={setLista}
              id={item.id}
              nome={item.nome}
              preco={item.preco}
              categoria={item.categoria}
            />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
