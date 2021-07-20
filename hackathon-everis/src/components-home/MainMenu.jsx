<<<<<<< HEAD
import React, { Fragment } from "react";
=======
import React from "react";
import '../components-home/home.css'
>>>>>>> d2de848f833d97ff6c041316fbf6f2a68724e888
import logo_everis from "../images/logo_everis.png";
import Navbar from "./Navbar";


const MainMenu = () => {
  return (
<<<<<<< HEAD
    <Fragment>
      <img src={logo_everis} alt="Everis Logo" width="190px" height="94px" />

      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/bookings" exact>
              <Bookings />
            </Route>
            <Route path="/allBookings" exact>
              <AllBookings />
            </Route>
            <Route path="/myBookings" exact>
              <MyBookings /> 
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
=======
    <div className="navbar-container">
      <img src={logo_everis} alt="Everis Logo" className="everis-logo" />
      <span>Nombre dinamico</span>
      <Navbar />
    </div>
>>>>>>> d2de848f833d97ff6c041316fbf6f2a68724e888
  );
};

export default MainMenu;
