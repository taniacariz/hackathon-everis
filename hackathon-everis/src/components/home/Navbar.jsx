import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="btn-group">
      <Link to="/home/Bookings" type="button" className="btn-navbar">
        Reservar
      </Link>
      <Link to="/home/allBookings" type="button" className="btn-navbar">
        Todas las reservas
      </Link>
      <Link to="/home/myBookings" type="button" className="btn-navbar">
        Mis reservas
      </Link>
    </div>
  );
};

export default Navbar;
