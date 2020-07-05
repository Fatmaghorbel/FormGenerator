import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./App.css";
import { VIEW_FORM_GENERATOR, VIEW_TASK_LIST } from "./constants";
//import { Compiler } from "./pages/compilerPage/compiler";

import { Index } from "./pages/Workspace";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={VIEW_TASK_LIST} component={Index} exact />
        <Redirect to={VIEW_TASK_LIST} />
      </div>
    );
  }
}

export default App;
