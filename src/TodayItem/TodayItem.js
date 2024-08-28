import './todayItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { TodoLike } from '../todolike/index'



function TodayItem(props) {
  return (
    <div className="todoItem">
    
        <li className='lip'>
          <CompleteIcon
            completed={props.completed} onComplete={props.onComplete}
          />
          <div className='contenedor-p'><p className={`todoItem-p ${props.completed && 'todoItem-p--completd'}`}>{props.text}</p></div>
          <div containerLike>
          <TodoLike
            aumentarLike={props.onAumentarLike}
            like={props.like}
            disminuirLike={props.onDisminuirLike}
            
          />
          </div>
          <DeleteIcon
            onDelete={props.onDelete}
          />
        </li>
    </div>

  )  
}
export { TodayItem }