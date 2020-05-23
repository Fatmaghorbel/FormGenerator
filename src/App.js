import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import TaskList from "./pages/taskListPage/taskList";
import Form from "./pages/formPage/form";
import { VIEW_FORM_GENERATOR, VIEW_TASK_LIST } from './constants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={VIEW_TASK_LIST} component={TaskList} exact />
        <Route path={`${VIEW_FORM_GENERATOR}/:taskId`} component={Form} />
      </div>
    );
  }
}

export default App;
