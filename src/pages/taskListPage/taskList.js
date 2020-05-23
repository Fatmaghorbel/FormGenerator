import React, { Component } from "react";
import "./taskList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { get } from "../../services/apiRest";
//import { setTaskId } from "../..services/param";
//import { getTaskId } from "../..services/param";
import { setCookie } from "../../services/param";
import Navbar from "../navbar";
export class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
  }

  componentDidMount() {
    setCookie();
  }

  getReadyTask = () => {
    get(
      `/bonita/API/bpm/humanTask?c=50&d=rootContainerId&f=state%3Dready`
    ).then((res) => {
      this.setState({
        taskList: res.data
      });
      console.log("TaskList", res.data);
    });
  };
  getTaskInformation = (task_Id) => {
    get(`/bonita/API/bpm/userTask/${task_Id}/contract`).then((res) => {
      //alert("contract input of the task " + res.data.inputs[0].inputs[0].type);
      //alert("contract input of the task " + res.data.inputs[0].type);
      //let tab = res.data.inputs[0].inputs;
      for (let index = 0; res.data.inputs[0].inputs[index]; index++) {
        this.createContractObject(
          res.data.inputs[0].inputs[index].name,
          res.data.inputs[0].inputs[index].type
        );
      }
      //console.log(res.data.inputs[0].inputs);

      //console.log(res.data.inputs[0].inputs[0].name);
      //console.log(res.data.inputs[0].inputs[1].type);
      //console.log(res.data.inputs[0].inputs[1].name);
    });
  };
  createContractObject = (inputName, inputType) => {
    let contract = {
      title: "taskName",
      required: ["inputName"],
      properties: {
        inputName: {
          title: inputName,
          type: inputType
        }
      }
    };
    return console.log(contract);
  };

  render() {
    const taskList = this.state.taskList;
    return (
      <div>
        <Navbar></Navbar>
        <div class="table-container ">
          <button
            onClick={this.getReadyTask}
            class="btn btn-sm btn-outline-secondary"
            type="button"
          >
            Load Tasks
          </button>
          <table className="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th>TaskId</th>
                <th>Name</th>
                <th>CaseId</th>
                <th>Process Name</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {taskList.length > 0 ? (
                taskList.map((task) => {
                  return (
                    <tr
                      className="row-style"
                      onClick={() => this.getTaskInformation(task.id)}
                    >
                      <td>{task.id}</td>
                      <td>{task.name}</td>
                      <td>{task.caseId}</td>
                      <td>{task.rootContainerId.displayName}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
