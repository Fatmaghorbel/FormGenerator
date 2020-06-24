import React, { Component } from "react";
import "./compiler.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { get } from "../../services/apiRest";
import { setCookie } from "../../services/param";
import Navbar from "../../components/navbar";
import { AppLayout } from "../../components/AppLayout";
import { withRouter } from "react-router-dom";
import { VIEW_FORM_GENERATOR } from "../../constants";
import Spinner from "../../components/Spinner";
import ApiService from "../../services/ApiService";

export class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
  }

  componentDidMount() {
    setCookie();
    this.getReadyTask();
  }

  getReadyTask = () => {
    this.setState({ loading: true });
    get(
      `/bonita/API/bpm/humanTask?c=50&d=rootContainerId&f=state%3Dready`,
      undefined,
      true
    )
      .then((res) => {
        this.setState({
          taskList: res.data,
          loading: false
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ loading: false });
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
    });
  };

  handleRowClick = (id) => {
    const { history } = this.props;
    history.push(`${VIEW_FORM_GENERATOR}/${id}`);
    debugger;
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
  onFileChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.setState({
      selectedFile: e.target.files[0]
    });
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
    ApiService.upload(formData).then((res) => {
      console.log(res.data);
      alert("File uploaded successfully.");
    });
  };

  render() {
    const { taskList, loading } = this.state;
    return (
      <AppLayout title="Task list">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-8">
              <button
                onClick={this.getReadyTask}
                className="btn btn-sm btn-outline-secondary refresh-button"
                type="button"
                disabled={loading}
              >
                {loading ? "Please wait..." : "Compile"}
              </button>
              <div className="form-group files color">
                <label>Upload Your File </label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  onChange={this.onFileChangeHandler}
                />
              </div>
              {loading && <Spinner />}
            </div>
            <div className="col"></div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default withRouter(Compiler);
