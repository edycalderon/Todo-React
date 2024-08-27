import './createTodoButtom.css'
import React from 'react'
import { todoContext } from '../TodoContext'
function CreateTodoButtom() {
    const {                     
        setOpenModal
    } = React.useContext(todoContext) 

    return (

        <button className='CreateTodoButtom' onClick={
            () =>  setOpenModal(true)}

        > + </button>

    )
}
export { CreateTodoButtom }