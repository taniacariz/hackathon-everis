
import React from "react";
import '../components-home/home.css'
import logo_everis from "../images/logo_everis.png";
import Navbar from "./Navbar";


const MainMenu = () => {
  return (
    <div className="navbar-container">
      <img src={logo_everis} alt="Everis Logo" className="everis-logo" />
      <span>Nombre dinamico</span>
      <Navbar />
    </div>
  );
};

export default MainMenu;