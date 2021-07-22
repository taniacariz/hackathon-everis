import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../components/home/home.css";
import MainMenu from "../components/home/MainMenu";
import Bookings from "./Bookings";
import AllBookings from "./AllBookings";
import MyBookings from "./MyBookings";
import UseForm from "../hooks/UseForm";
import { FormContext } from "../context/FormContext";
import { auth } from "../Firebase";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  const { step, prev, next, changeStep } = UseForm();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("Usuario existente");
      setUser(auth.currentUser);
    } else {
      console.log("Usuario no existe");
      props.history.push("/");
    }
  }, [props.history]);

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

export default withRouter(Home);
