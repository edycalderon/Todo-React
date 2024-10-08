import './appUI.css'
import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList';
import { TodayItem } from '../TodayItem/TodayItem';
import { CreateTodoButtom } from '../TodoButton/CreateTodoButtom'
import { todoContext } from '../TodoContext'
import { Modal } from '../Modal/index';

function AppUI() {
    const {
        id,
        edit,
        setId,
        editTodo,
        total,
        addTodo,
        setOpenModal,
    } = React.useContext(todoContext)

    const [NewTodoValue, setNewTodoValue] = React.useState('')
    

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(NewTodoValue)
        setOpenModal(false);
        setNewTodoValue('')

    }

    const onCancel = () => {
        setOpenModal(false);
        setNewTodoValue('')
        setId()
    }

    const update = (event) =>{
        event.preventDefault()
        edit(id, NewTodoValue)
        addTodo(NewTodoValue)
        setOpenModal(false);
        setNewTodoValue('')
    }

    // const onChange = (event) => {
    //     setNewTodoValue(event.target.value)
    // }



    const {
        EditarValue,
        openModal,
        loanding,
        error,
        onCompleteTodo,
        onDesable,
        searchedTodos,
        aumentarlikes,
        disminuirlikes
    } = React.useContext(todoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />



            <TodoList>
                {loanding &&
                    <div className='containerLoanding'>
                        <div className="spinner">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                }

                {error && <p>desesperate hubo un error</p>}

                {
                    (total === 0 && loanding === false)
                    && <p>Crear tu primer TODO</p>
                }

                {(searchedTodos.length === 0 && total > 0)
                    && <p>No Tienes TODO Con Este Nombre</p>
                }

                {searchedTodos.map(todo => (
                    <TodayItem
                        key={todo.id}
                        completed={todo.completado}
                        text={todo.text}
                        onComplete={() => onCompleteTodo(todo.id)}
                        onDelete={() => onDesable(todo.id)}
                        onAumentarLike={() => aumentarlikes(todo.id)}
                        like={todo.like}
                        onDisminuirLike={() => disminuirlikes(todo.id)}
                        editTodo = {() => editTodo(todo.id)}

                    />
                ))}
            </TodoList>


            <CreateTodoButtom />

            {openModal && (
                <Modal>
                    <div className='containerModal'>
                        <div className="card">
                            <div className="card2">
                                <input type="text" name="text" className="input" placeholder="Tarea"
                                    onChange={(event) => { setNewTodoValue(event.target.value) }}

                                    //value={NewTodoValue}
                                />
                                <div>
                                    <button className="btn" onClick={() => onCancel()}>calcelar</button>
                                    <button className="btn" onClick={() => onSubmit()}>agregar</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Modal>
            )}


        </>


    )
}

export { AppUI }





