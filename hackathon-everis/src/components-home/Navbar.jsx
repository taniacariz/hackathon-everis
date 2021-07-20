import React from 'react'
import { Link } from 'react-router-dom'
import CollaboratorName from './Collaborator Name'

const Navbar = () => {
    return (
        <div className="btn-group"> 
            <CollaboratorName />
            <Link to = '/bookings' type ='button' className="button">Reservar</Link>
            <Link to = '/allBookings' type ='button' className="button">Todas las reservas</Link>
            <Link to = '/myBookings' type ='button' >Mis reservas</Link>
        </div>
    )
}

export default Navbar;