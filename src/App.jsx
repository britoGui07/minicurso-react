import { useState } from 'react'
import './index.css'
import Item from './components/Item'
import Cabecalho from './components/Cabecalho'


function App() {

  const [tarefas, setTarefas] = useState([
    {id: 1, texto: "AI AI AI AI AI AI AIAI, SER BANDIDO É BOM DEMAIS"},
    {id: 2, texto: "OLHA SÓ OQ ELAS FAZ"}
  ])

  const [texto, setTexto] = useState('')

  function adicionar(e){
    e.preventDefault()
    if(texto.trim() === '') return
    setTarefas([...tarefas, {id:Date.now(), texto:texto}])
    setTexto('')
  }

  function remover(id){
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return(
    <div className='app'>
      <Cabecalho titulo="Minhas Tarefas" subtitulo="Minicurso de React - IFSP Boituva"/>

      <form className='formulario' onSubmit={adicionar}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder='Digite uma nova tarefa'
        />

        <button type='submit'>Adicionar</button>
      </form>

      {tarefas.length === 0 ? (
        <p className='vazio'>Nenhuma tarefa ainda</p>
      ) : (
        <ul className='lista'>
          {tarefas.map((tarefa) => (
            <Item key={tarefa.id} texto={tarefa.texto} onRemover={() => remover(tarefa.id)}/>
          ))}
        </ul>
      )}

      <p className='contador'>Total de tarefas: {tarefas.length}</p>
    </div>
  )

  }

export default App
