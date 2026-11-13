import { useState } from 'react'
import './index.css'
import Item from './components/Item'
import Cabecalho from './components/Cabecalho'


function App() {

  const {tarefas, setTarefas} = useState([
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

  return(
    <div className='app'>
      <Cabecalho titulo="Minhas Tarefas" subtitulo="Minicurso de React - IFSP Boituva"/>

      <form className='formulario'>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder='Digite uma nova tarefa'
        />

        <button type='submit'>Adicionar</button>
      </form>

      <ul className='lista'>
        {tarefas.map((tarefa) => (
          <Item key={tarefa.id} texto={tarefa.texto}/>
        ))}
      </ul>
    </div>
  )

  }

export default App
