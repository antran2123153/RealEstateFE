import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./user/User";
import Admin from "./manager/Admin";
import "./css/index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={User} />
        </Switch>
      </Router>
    );
  }
}

export default App;
