  
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../components-home/home.css'
import MainMenu from "../components-home/MainMenu";
import Bookings from "./Bookings"
import AllBookings from "./AllBookings"
import MyBookings from "./MyBookings";
import stepContext from "../context/stepContext";

export const Home = () => { 
  const { step} = React.useContext(stepContext);
  return (
    <Router>
      <div className="view-home-container">
        <MainMenu />
        <Switch>
          <Route path="/home/bookings">
            <Bookings action = {step} />
          </Route>
          <Route path="/home/allBookings">
            <AllBookings />
          </Route>
          <Route path="/home/myBookings">
            <MyBookings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
