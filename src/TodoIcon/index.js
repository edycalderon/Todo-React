import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteDVG } from './delete.svg';
import './todoIcon.css'

const iconTypes = {
    "check":(color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete":(color) => <DeleteDVG className='Icon-svg' fill={color}/>,
}

function TodoIcon( {type, color, onClick} ){

    return(
        <span className={`Icon-container  Icon-container-${type}`} onClick={onClick}>
        {iconTypes[type](color)}
        </span>


    )
}
export { TodoIcon }