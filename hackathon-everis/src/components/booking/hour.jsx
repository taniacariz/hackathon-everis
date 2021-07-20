import React from 'react'

const Hour = ({dispatch}) => {
  return (
    <div>
      <button onClick={() => dispatch("12:00")}>
        Agrego Hora
      </button>
      Estas en hora
    </div>
  )
}

export default Hour
 