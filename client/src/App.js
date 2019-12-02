import React, { Component } from "react";
import ObservationContainer from "./container/observationContainer";
import AdditionFormContainer from "./container/additionFormContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarPage from "./component/nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavbarPage />
          <Switch>
            <Route exact path="/" component={ObservationContainer}></Route>
            <Route exact path="/add" component={AdditionFormContainer}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
