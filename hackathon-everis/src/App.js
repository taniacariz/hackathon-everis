import {
  BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './App.css';
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Home } from "./views/Home";

function App() {
  return (
    <Router>
    <div className="container">
        <Switch> 
          <Route path="/" exact>
              <Login />
            </Route>
          <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
