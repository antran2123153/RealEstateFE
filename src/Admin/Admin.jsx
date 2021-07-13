import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Manager from "./Manager";

class Admin extends Component {
  render() {
    console.log(123);
    return (
      <Router>
        <Switch>
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin" component={Manager} />
        </Switch>
      </Router>
    );
  }
}

export default Admin;
