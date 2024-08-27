import './todayItem.css'
import { CompleteIcon} from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { TodoLike } from '../todolike/index'



function TodayItem(props) {
  return (
    <li className="todoItem">

      <CompleteIcon
      completed={props.completed} onComplete={props.onComplete}
      />

      <p className={`todoItem-p ${props.completed && 'todoItem-p--completd'}`}>{props.text}</p>
      <TodoLike
      aumentarLike = {props.onAumentarLike}
      like = {props.like}
      disminuirLike = {props.onDisminuirLike}
      />

    <DeleteIcon       
      onDelete={props.onDelete}
    />
    </li>
  )
}
export { TodayItem }