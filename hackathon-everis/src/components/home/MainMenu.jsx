import React from "react";
import "./home.css";
import logo_everis from "../../images/logo_everis.png";
import Navbar from "./Navbar";
import SignOff from "./SignOff";
import CollaboratorName from "./CollaboratorName";
import logout from "../../images/log-out.png";

const MainMenu = () => {
  return (
    <div className="navbar-container">
      <img
        className="logo"
        src={logo_everis}
        alt="Everis Logo"
        width="190px"
        height="94px"
      />
      <img src={logout} alt="icono cierre" className="icono-logout" />
      <CollaboratorName />
      <Navbar />
      <SignOff />
    </div>
  );
};

export default MainMenu;
