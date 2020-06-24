import React, { Component } from "react";
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

export class DownloadZip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  onFileChangeHandler = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = function(e) {
      const xlmFile = e.target.result;
      ApiService.upload(xlmFile)
        .then((res) => {
          console.log(res);
          alert("File uploaded successfully.");
        })
        .catch((e) => {
          console.log(e);
        });
    };
    reader.readAsText(e.target.files[0]);
    debugger;
    this.setState({ loading: true });
    this.setState({
      selectedFile: e.target.files[0]
    });
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
  };
  helloHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    ApiService.hello().then((res) => {
      console.log(res.data);
      alert("hello.");
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
              {loading ? "Please wait..." : "Compile"}
              <div className="form-group files color">
                <label>Upload Your File </label>
                <input
                  type="file"
                  className="form-control"
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

export default withRouter(DownloadZip);
