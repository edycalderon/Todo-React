import React from "react";
import { useLocalStorage } from '../App/useLocalStorage';
const todoContext = React.createContext()

function Todoprovider({ children }) {

  // const defaultTodos = [
  //   { text: 'tomar el curso de React ', completado: false, like: 0 },
  //   { text: 'cortar cebolla ', completado: false, like: 0 },
  //   { text: 'llorar con la llorona ', completado: false, like: 0 },
  //   { text: 'LALALALAL ', completado: false, like: 0 },
  //   { text: 'la vaca ', completado: false, like: 0 }
  // ];


  const {
    item: todos,
    saveItem: saveTodos,
    loanding,
    error,
  } = useLocalStorage('TODOS_V1', [])
  
  const [SearchValue, setSearcheValue] = React.useState('')
  //console.log(SearchValue)
  //let valorTodo ;
  const todosCompletados = todos.filter(todos => todos.completado).length
  let total = todos.length
  let searchedTodos = todos.filter((todos) => {
    return todos.text.toLowerCase().includes(SearchValue.toLowerCase())
  } )

  const {
    item: contador,
    saveItem: saveContador,
  } = useLocalStorage('CONTADOR_V1', 0)

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      id: contador + 1,
      text: text,
      completado: false,
      like: 0
    })
    saveContador(contador + 1)
    saveTodos(newTodos)

  }

  const [openModal, setOpenModal] = React.useState(false)
  const [id, setId] = React.useState()
  const [newTodoValue, setNewTodoValue] = React.useState('')
  //const [SearchValue, setSearchValue] = React.useState('')
  



  let onCompleteTodo = (id) => {
    let newTodo = [...todos]
    let todoIndex = newTodo.findIndex((todo) => todo.id === id)
    newTodo[todoIndex].completado === true ? newTodo[todoIndex].completado = false
      : newTodo[todoIndex].completado = true

    saveTodos(newTodo)
  }

  let onDesable = (id) => {
    let newTodo = [...todos]
    let todoIndex = newTodo.findIndex(
      (todo) => todo.id === id
      
    )
    console.log(todoIndex)
    newTodo.splice(todoIndex, 1)
    saveTodos(newTodo)
  }

  
  const aumentarlikes = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
      
    )
    
    newTodos[todoIndex].like += 1
    saveTodos(newTodos)
  }

  const disminuirlikes = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    if (newTodos[todoIndex].like > 0) {
      newTodos[todoIndex].like -= 1
      saveTodos(newTodos)
      console.log(newTodos)
    }
  }

  const editTodo =(id) =>{
    setOpenModal(true)
    setId(id)
    let newTodo =[...todos]
    let todoIndex = newTodo.findIndex(
      (todo) => todo.id === id
    )
    setNewTodoValue(newTodo[todoIndex].test)
  }

  const edit =(id, text) => {
    if(text !== ''){
      let newTodo = [...todos]
      let todoIndex = newTodo.findIndex(
        (todo) => todo.id === id
      )
      newTodo[todoIndex].text = text
      saveTodos(newTodo)
    }
  }

  return (
    <todoContext.Provider value={{
      newTodoValue,
      editTodo,
      setId,
      setNewTodoValue,
      id,
      edit,
      addTodo,
      setOpenModal,
      openModal,
      todosCompletados,
      loanding,
      error,
      total,
      setSearcheValue,
      onCompleteTodo,
      onDesable,
      searchedTodos,
      aumentarlikes,
      disminuirlikes
    }}>
      {children}

    </todoContext.Provider>
  )
}

export { todoContext, Todoprovider }