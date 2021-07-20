import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="btn-group"> 
            <Link to = '/bookings' type ='button'>Reservar</Link>
            <Link to = '/allBookings' type ='button'>Todas las reservas</Link>
            <Link to = '/myBookings' type ='button'>Mis reservas</Link>
        </div>
    )
}

export default Navbar;