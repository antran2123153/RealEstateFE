import React, { Component } from "react";
import {
  Home,
  Navigation,
  Footer,
  ListProject,
  Contract,
  ProjectDetail,
  Loading,
  TopPageButton,
} from "./untils";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "../axios";

class User extends Component {
  state = {
    projects: [],
    local: {},
  };

  UNSAFE_componentWillMount() {
    this.getProjects();
    this.getLocal();
  }

  getProjects = async () => {
    const { data } = await axios.get(`/api/project`);
    this.setState({
      projects: data.projects,
    });
  };

  getLocal = async () => {
    const local = await axios.get(`/api/local`);
    this.setState({
      local: local.data,
    });
  };

  render() {
    const { projects, local } = this.state;
    if (Object.keys(local).length === 0 || projects.length === 0)
      return <Loading />;
    return (
      <Router>
        <Navigation local={local} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home projects={projects} local={local} />}
          />
          <Route
            exact
            path="/projects"
            render={() => <ListProject projects={projects} local={local} />}
          />
          <Route exact path="/contract" component={Contract} />
          <Route
            exact
            path="/project/:name"
            render={() => <ProjectDetail projects={projects} local={local} />}
          />
        </Switch>
        <TopPageButton />
        <Footer local={local} />
      </Router>
    );
  }
}

export default User;
