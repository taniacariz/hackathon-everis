import React from 'react'
import ReturnArrow from './Return-arrow'

const ReturnArrow = () => {
  const returnStep = ()=>{
    console.log ("paso atras")
  }


  return (
    <div>
      <div>
        <span>Siguiente</span>
        <img src={ReturnArrow} alt="Ir atras" onClick={returnStep} />
      </div>
    </div>
  )
}

export default ReturnArrow
