import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppLayout } from "../../components/AppLayout";
import { withRouter } from "react-router-dom";
import Spinner from "../../components/Spinner";
import ApiService, { END_POINT_URL } from "../../services/ApiService";
// import Modal from "../../components/Modal";
import Popover from "../../components/Popover";


import "./index.css";

import { UnControlled as CodeMirror } from "react-codemirror2";
import Controls from "../../components/Controls";
import Annexe from "../../components/Annexe";
import CodeEditor from "../../components/CodeEditor";
import { validateXML } from "../../services/xml";
import Stepper from "../../components/Stepper/index";
import InfoModal from "../../components/InfoModal";

const initState = {
  xmlContent: "<!--Veuillez déposer votre code XML du processus ici-->",
  withBundle: false,
  withSrc: false,
  logList: [],
  isActive: true,
  showModal: false,
};

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.step1Ref = React.createRef();
  }

  componentDidMount() {
    window.$("#contractModal").on('hidden.bs.modal', this.handleHideModal);
    window.$("#inputGroupFile01").on("change", function () {
      var fileName = window.$(this).val().split("\\").pop();
      window.$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
  };

  handleXmlContentChange(value) {
    this.setState({ xmlContent: value })
  }

  fileChangeHandler = (e) => {
    e.preventDefault();
    this.addLogLine({
      content: "Loading contact file.",
      className: "annexe-log--info",
    });
    const reader = new FileReader();
    this.setState({ xmlFile: e.target.files[0].name, xmlUploaded: true });
    reader.onload = (e) => {
      const xlmFile = e.target.result;
      this.setState({ xmlContent: xlmFile });
      this.handleShowModal();
      this.addLogLine({
        content: "Contract file loaded.",
        className: "annexe-log--success",
      });
      // ApiService.upload(xlmFile)
      //   .then((res) => {
      //     console.log(res);
      //     alert("File uploaded successfully.");
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    };
    reader.readAsText(e.target.files[0]);
    this.setState({ loading: true });
    this.setState({
      selectedFile: e.target.files[0],
    });
    this.modalRef.current.modal({ show: true });
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
  };

  resetClickHandler = () => {
    this.setState(initState, () => {
      this.addLogLine({
        content: "Reset the workspace.",
        className: "annexe-log--info",
      });
    });
  };

  handleSubmit = () => {
    const { xmlContent, withBundle, withSrc } = this.state;
    const { valid, message: validationMessage } = validateXML(xmlContent);
    if (!valid) {
      this.addLogLine({
        content: validationMessage,
        className: "annexe-log--error",
      });
    } else {
      this.addLogLine({
        content: "Submission in progress ...",
        className: "annexe-log--inf",
      });
      ApiService.upload(xmlContent, { bundle: withBundle, src: withSrc })
        .then((res) => {
          if (res.data.errorMessage) {
            alert(res.data.errorMessage);
          }
          console.log(res);
          this.addLogLine({
            content: "The process has been successfully submitted.",
            className: "annexe-log--success",
          });

          res.data &&
          res.data.bundleUrl &&
          this.addLogLine({
            content: `Downloading the production version of the project:.`,
            url: ` ${END_POINT_URL}${res.data.bundleUrl}`,
            className: "annexe-log--success",
          });
          res.data &&
          res.data.srcUrl &&
          this.addLogLine({
            content: `Downloading the project source code:.`,
            url: `${END_POINT_URL}${res.data.srcUrl}`,
            className: "annexe-log--success",
          });
        })
        .catch((e) => {
          this.addLogLine({
            content: "The process submission operation has failed.",
            className: "annexe-log--error",
          });
          console.log(e);
        });
    }
  };

  addLogLine = (logLine) => {
    const { logList } = this.state;
    this.setState({ logList: [logLine, ...logList] });
  };

  setWithBundle = () => {
    const { withBundle } = this.state;
    this.addLogLine({
      content: withBundle
        ? "Deactivation of generation of a production version."
        : "Activation of the generation of a production version.",
      className: "annexe-log--info",
    });
    this.setState({ withBundle: !withBundle, isActive: true });
  };

  setWithSrc = () => {
    const { withSrc } = this.state;
    this.addLogLine({
      content: withSrc
        ? "Deactivation of source code generation."
        : "Activation of the source code generation.",
      className: "annexe-log--info",
    });
    this.setState({ withSrc: !withSrc, isActive: true });
  };

  handleHideModal() {
    this.setState({
      showModal: false,
    })
    window.$("#contractModal").modal('hide');
  }

  handleShowModal() {
    this.setState({ showModal: true });
    window.$("#contractModal").modal('show');
  }

  render() {
    const {
      xmlContent,
      withBundle,
      withSrc,
      logList,
      isActive,
      xmlUploaded,
      showModal,
    } = this.state;

    return (
      <AppLayout title="Bonita React Generator" classes="workspace-layout">
        <div className="container workspace-container">
          <div className="workspace-body--main">
            <div className="workspace-body--main__info">
              <h5 className="card-header bg-danger text-white ">
                What is Bonita React Generator?
              </h5>
              {/*<div className="card-body ">*/}
              <h5 className="card-title"></h5>
              <p className="card-text text-danger font-weight-bold">
                This tool allows you to generate a React Application based on a
                Contract !
              </p>
              <p className="card-text text-danger">
                If you wanna know more details about the contract click on the
                button below
              </p>
            </div>
            <Stepper
              handleSubmit={this.handleSubmit}
              addLogLine={this.addLogLine}
              steps={[
                {
                  title: "Upload XML File",
                  content: (
                    <div>

                      <div class="input-group mb-3">
                        <div className="input-group-prepend">
                          <button className="btn btn-outline-secondary" type="button"
                                  onClick={() => this.handleShowModal()}
                                  id="inputGroupFileAddon03">Edit
                          </button>
                        </div>
                        <div class="custom-file">
                          <input type="file" class="custom-file-input" id="inputGroupFile01"
                                 aria-describedby="inputGroupFileAddon01" onChange={this.fileChangeHandler} />
                          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Choose Application type",
                  content: <Controls withBundle={withBundle}
                                     withSrc={withSrc} setWithBundle={this.setWithBundle}
                                     setWithSrc={this.setWithSrc} />,
                },
                {
                  title: "Confirmation and submission",
                  content: (<Fragment><p className="card-text text-info font-weight-bold">
                      Do you want to submit the request?
                    </p>
                      <p className="card-text text-info">
                        If you have selected the bundle option, the process may take a few minutes.
                      </p></Fragment>
                  ),
                },
              ]}
            />
          </div>

          <div className="workspace-body-container-log">
            <div className="row">
              <div className="col-12  pl-0">
                <section className="workspace-body-section workspace-body--annexe">
                  <Annexe logList={logList} />
                </section>
              </div>
            </div>
          </div>
        </div>
        {showModal && <InfoModal xmlContent={xmlContent}
                                 handleXmlContentChange={(value) => this.handleXmlContentChange(value)}
                                 addLogLine={this.addLogLine}
                                 handleHideModal={() => this.handleHideModal()} />}
      </AppLayout>
    );
  }
}

export default withRouter(Index);