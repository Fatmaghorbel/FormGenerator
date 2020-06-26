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

export class UploadZip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  downloadEmployeeData = () => {
    fetch("http://localhost:8050/download").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "sourceApp.zip";
        a.click();
      });
      //window.location.href = response.url;
    });
  };

  downloadHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    ApiService.get().then((res) => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement("a");
      a.href = url;
      a.download = "SourceApp.zip";
      a.click();
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
                <button
                  type="submit"
                  className="form-control"
                  onClick={this.downloadEmployeeData}
                >
                  Download your Source App
                </button>
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

export default withRouter(UploadZip);
