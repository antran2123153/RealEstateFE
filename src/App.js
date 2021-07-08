import React, { Component } from "react";
import {
  Home,
  Navigation,
  Footer,
  ListProject,
  Contract,
  ProjectDetail,
  Loading,
  Admin,
  Login,
} from "./untils";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/index.css";
import axios from "./axios";

class App extends Component {
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
          <Route exact path="/admin/login" component={Login} />
          <Route
            exact
            path="/project/:id"
            render={() => <ProjectDetail projects={projects} local={local} />}
          />
          <Route exact path="/admin" component={Admin} />
        </Switch>
        <Footer local={local} />
      </Router>
    );
  }
}

export default App;
