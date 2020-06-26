import React, { Component } from "react";
import "./interface.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { get } from "../../services/apiRest";
import { setCookie } from "../../services/param";
import Navbar from "../../components/navbar";
import { AppLayout } from "../../components/AppLayout";
import { withRouter } from "react-router-dom";
import { VIEW_FORM_GENERATOR } from "../../constants";
import Spinner from "../../components/Spinner";
import DownloadZip from "./downloadZip";
import UploadZip from "./uploadZip";

export class Interface extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { taskList, loading } = this.state;
    return (
      <AppLayout title="Task list">
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-8">
              <UploadZip></UploadZip>
            </div>
            <div className="col-4">
              <DownloadZip></DownloadZip>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default withRouter(Interface);
