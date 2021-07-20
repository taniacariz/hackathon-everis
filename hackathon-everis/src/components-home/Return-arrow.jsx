import React from 'react'
import ReturnArrow from './Return-arrow'

const ReturnArrow = (props) => {
 

  return (
    <div>
      <div>
        <span>Siguiente</span>
        <img src={ReturnArrow} alt="Ir atras" onClick={props.function} />
      </div>
    </div>
  )
} 

export default ReturnArrow
