import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="btn-group"> 
            <Link to = '/home/bookings' type ='button' className="navbar-bttn">Reservar</Link>
            <Link to = '/home/allBookings' type ='button' className="navbar-bttn" >Todas las reservas</Link>
            <Link to = '/home/myBookings' type ='button' className="navbar-bttn">Mis reservas</Link>
        </div>
    )
} 

export default Navbar;