import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../components/home/home.css";
import MainMenu from "../components/home/MainMenu";
import Bookings from "./Bookings";
import AllBookings from "./AllBookings";
import MyBookings from "./MyBookings";
import useForm from "../hooks/useForm";
import { FormContext } from "../context/form-context";
import { auth } from "../Firebase";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  
  const { step, prev, next, changeStep } = useForm();
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    if(user){
      console.log('cosa');
    }if(auth.currentUser){
        console.log('Usuario existente')
        setUser(auth.currentUser)
    }else{
        console.log('Usuario no existe')
        props.history.push('/')
    }
}, [props.history])

  return (
    <Router>
      <div className="view-home-container">
        <MainMenu/>
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
