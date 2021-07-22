import React from "react";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { auth } from "./Firebase";

const App = () => {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return firebaseUser !== false ? (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home/bookings">
          <Home />
        </Route>
      </Switch>
    </Router>
  ) : (
    <p>Trayendo datos de Firebase...</p>
  );
};

export default App;
