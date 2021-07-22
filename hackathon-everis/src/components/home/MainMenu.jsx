import React from "react";
import "./home.css";
import logo_everis from "../../images/logo_everis.png";
<<<<<<< HEAD
import CollaboratorName from './CollaboratorName'
=======
import CollaboratorName from "./ColaboratorName";
>>>>>>> 3dcbe4a2dfc45150fd319062cfa388e52fcc2383
import Navbar from "./Navbar";
import SignOff from "./SignOff";

const MainMenu = () => {
  return (
    <div className="navbar-container">
      <img className="logo" src={logo_everis} alt="Everis Logo" width="190px" height="94px" />
      <CollaboratorName/>
      <Navbar />
      <SignOff />
    </div>
  );
};

export default MainMenu;
