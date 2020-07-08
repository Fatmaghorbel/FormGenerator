import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./App.css";
import { VIEW_TASK_LIST } from "./constants";
import Workspace from "./pages/Workspace";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={VIEW_TASK_LIST} component={Workspace} exact />
        <Redirect to={VIEW_TASK_LIST} />
      </div>
    );
  }
}

export default App;
