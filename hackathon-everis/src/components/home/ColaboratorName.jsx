import React from 'react'

const CollaboratorName = () => {
  const {displayName} = JSON.parse(localStorage.getItem("user") || "{}")

  return (
    <div className="collaborator-name">¡Hola {displayName}!</div>
  )
}
export default CollaboratorName