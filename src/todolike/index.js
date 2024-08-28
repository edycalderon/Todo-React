import React from "react"
import './index.css'
import { ReactComponent as Megusta } from '../TodoIcon/megusta1.svg';
import { ReactComponent as NoMegusta } from '../TodoIcon/meGusta.svg';
import { ReactComponent as Editar } from '../TodoIcon/editar.svg';
import { todoContext } from '../TodoContext'

const TodoLike = ({ like, aumentarLike, disminuirLike, }) => {
    const {
        setEditarValue
    } = React.useContext(todoContext)
    
    return (
        <div className="container-like">
            <span>{like}</span>
            <div>
                <button onClick={aumentarLike}>   <Megusta />    </button>
                <button onClick={disminuirLike}>   <NoMegusta />  </button>
                <button onClick={
                    () => setEditarValue(true)}
                    
                >   <Editar />  </button>
            </div>
        </div>

    )
}

export { TodoLike }