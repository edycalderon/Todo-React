import React from 'react'
import './todoSearch.css'
import { todoContext } from '../TodoContext'

function TodoSearch() {
    const {
        setSearcheValue,
        SearchValue,

      } = React.useContext(todoContext)
    return (

        <input placeholder="Buscar" className="todoSearch" value={SearchValue}
        onChange={(evento => {
            setSearcheValue(evento.target.value)
        })}
        
        >
        </input>


    )
}
export { TodoSearch }