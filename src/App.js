import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Form from "./pages/formPage/form";
import { VIEW_FORM_GENERATOR, VIEW_TASK_LIST } from "./constants";
//import { Compiler } from "./pages/compilerPage/compiler";
import { DownloadZip } from "./pages/zipPage/downloadZip";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={VIEW_TASK_LIST} component={DownloadZip} exact />
        <Route path={`${VIEW_FORM_GENERATOR}/:taskId`} component={Form} />
      </div>
    );
  }
}

export default App;
