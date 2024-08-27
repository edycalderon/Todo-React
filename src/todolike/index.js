import React from "react"
import './index.css'
import { ReactComponent as Megusta } from '../TodoIcon/megusta1.svg';
import { ReactComponent as NoMegusta } from '../TodoIcon/meGusta.svg';

const TodoLike = ({like, aumentarLike, disminuirLike})=>{
    return(
        <div className="container-like">
            <span>{like}</span>
            <div>
            <button onClick={aumentarLike}>   <Megusta/>    </button>
            <button onClick={disminuirLike}>   <NoMegusta/>  </button>
            </div>
        </div>

    )
}

export { TodoLike }