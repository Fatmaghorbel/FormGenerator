import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Form from "./pages/formPage/form";
import { VIEW_FORM_GENERATOR, VIEW_TASK_LIST } from "./constants";
//import { Compiler } from "./pages/compilerPage/compiler";
import { UploadZip } from "./pages/zipPage/uploadZip";
import { Interface } from "./pages/zipPage/interface";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={VIEW_TASK_LIST} component={Interface} exact />
        <Route path={`${VIEW_FORM_GENERATOR}/:taskId`} component={Form} />
      </div>
    );
  }
}

export default App;
