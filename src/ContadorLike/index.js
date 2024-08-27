import React from "react"
import './likeButon.css'
import { ReactComponent as Megusta } from '../TodoIcon/megusta1.svg';
import { ReactComponent as NoMegusta } from '../TodoIcon/meGusta.svg';

function Likes() {
  const [pulgar, setPulgar] = React.useState(parseInt(localStorage.getItem('pulgar')) || 0);

  if (localStorage.getItem('pulgar')) {

  } else {
    localStorage.setItem('pulgar', pulgar)
  }

  const suma = () => {
    setPulgar(pulgar + 1)
    localStorage.setItem('pulgar', pulgar + 1)
  }
  const resta = () => {
    if (pulgar <= 0) {
      alert('error')
    } else {
      setPulgar(pulgar - 1)
      localStorage.setItem('pulgar', pulgar - 1)
    }
  }
  return (
  
    
    <div>
      <button onClick={suma} className="container"> <Megusta/> </button>
      <button onClick={resta}> <NoMegusta /> </button>
      <div className='cuadrado'>{pulgar}</div>
    </div>
  )
}

export { Likes }