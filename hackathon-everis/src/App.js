import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { Home } from "./views/Home";
import stepContext from "./context/stepContext";

function App() {
  const [step, setStep] = React.useState(1)
  const updateStep = (value)=>{
    setStep(value);
  }
  return (
    <stepContext.Provider value={{step, updateStep}}>
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </stepContext.Provider>
  );
}

export default App;
