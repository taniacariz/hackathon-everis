import React from 'react'
import ArrowImage from '../../images/return.png'

const ReturnArrow = ({action}) => {

  return (
    <div style={{cursor: "pointer"}}>
      <div>
        <span>Siguiente</span>
        <img src={ArrowImage} alt="Ir atras" onClick={action} />
      </div>
    </div>
  )
} 

export default ReturnArrow
