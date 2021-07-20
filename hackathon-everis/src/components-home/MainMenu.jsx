import React, { Fragment } from "react";
import logo_everis from "../images/logo_everis.png";
import Bookings from "../views/Bookings";
import AllBookings from "../views/AllBookings";
import MyBookings from "../views/MyBookings";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainMenu = () => {
  return (
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
  );
};

export default MainMenu;
