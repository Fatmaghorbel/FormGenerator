import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { TaskList } from "./pages/taskListPage/taskList";
import { Form } from "./pages/formPage/form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/taskList" component={TaskList} exact />
        <Route path="/formGenerator" component={Form} exact />
      </div>
    );
  }
}

export default App;
