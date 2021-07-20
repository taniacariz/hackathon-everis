
import React from "react";
import './home.css'
import logo_everis from "../../images/logo_everis.png";
import CollaboratorName from "./collaborator-name";
import Navbar from "./Navbar";
import SignOff from "./SignOff";


const MainMenu = () => {
  return (
    <div className="navbar-container">
      <img src={logo_everis} alt="Everis Logo" className="everis-logo" />
      <CollaboratorName />
      <Navbar />
      <SignOff />
    </div>
  ); 
};

export default MainMenu;