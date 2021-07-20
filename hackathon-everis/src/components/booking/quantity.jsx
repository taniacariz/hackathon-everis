import React from 'react'

const Quantity = ({dispatch}) => {
  return (
    <div>
      <button onClick={() => dispatch(2)}>
        Agrego Cantidad
      </button>
      Estas en Cantidad
    </div>
  )
}

export default Quantity