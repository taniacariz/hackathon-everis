import React from 'react'
import goFowardArrow from '../images/go-forward.png'

const GoForwardArrow = () => {

  const stepForward = () =>{
    console.log ("avanzando el paso")
  }
  return (
    <div>
      <div>
        <span>Siguiente</span>
        <img src={goFowardArrow} alt="Ir adelante" onClick={stepForward} />
      </div>
    </div>
  )
}
 
export default GoForwardArrow
