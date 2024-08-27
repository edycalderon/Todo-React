import './todoList.css'

function TodoList({ children }) {

    return (
        <div className='containerTodoList'>
            <ul className="TodoList">
                {children}
            </ul>

        </div>


    )
}

export { TodoList }