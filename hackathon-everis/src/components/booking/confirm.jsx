import React from 'react'

const Confirm = ({data}) => {
  return (
    <div>
      <button onClick={() => console.log(data)}>
        Veo Data
      </button>
      Estas en confirmacion
    </div>
  )
}

export default Confirm
 