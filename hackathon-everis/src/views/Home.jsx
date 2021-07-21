import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../components/home/home.css";
import MainMenu from "../components/home/MainMenu";
import Bookings from "./Bookings";
import AllBookings from "./AllBookings";
import MyBookings from "./MyBookings";
import useForm from "../hooks/useForm";
import { FormContext } from "../context/form-context";

export const Home = () => {
  const { step, prev, next, changeStep } = useForm();

  return (
    <Router>
      <div className="view-home-container">
        <MainMenu />
        <Switch>
          <Route path="/home/bookings">
            <FormContext.Provider value={{ step, prev, next, changeStep }}>
              <Bookings />
            </FormContext.Provider>
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
