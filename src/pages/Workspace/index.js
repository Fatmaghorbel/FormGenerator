import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppLayout } from "../../components/AppLayout";
import { withRouter } from "react-router-dom";
import Spinner from "../../components/Spinner";
import ApiService, { END_POINT_URL } from "../../services/ApiService";

import "./index.css";

import { UnControlled as CodeMirror } from "react-codemirror2";
import Controls from "../../components/Controls";
import Annexe from "../../components/Annexe";
import CodeEditor from "../../components/CodeEditor";
import { validateXML } from "../../services/xml";

const initState = {
  xmlContent: "<!--Veuillez déposer votre code XML du processus ici-->",
  withBundle: false,
  withSrc: false,
  logList: [],
  isActive: true
};

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  componentDidMount() {}

  fileChangeHandler = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    this.setState({ xmlFile: e.target.files[0].name });
    reader.onload = (e) => {
      const xlmFile = e.target.result;
      this.setState({ xmlContent: xlmFile });
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
      selectedFile: e.target.files[0]
    });
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
  };

  resetClickHandler = () => {
    this.setState(initState, () => {
      this.addLogLine({
        content: "Réinitialiser le workspace.",
        className: "annexe-log--info"
      });
    });
  };

  submitClickHandler = () => {
    const { xmlContent, withBundle, withSrc } = this.state;
    debugger;
    const { valid, message: validationMessage } = validateXML(xmlContent);
    if (!valid) {
      this.addLogLine({
        content: validationMessage,
        className: "annexe-log--error"
      });
    } else {
      this.addLogLine({
        content: "Soumission en cours.",
        className: "annexe-log--inf"
      });
      ApiService.upload(xmlContent, { bundle: withBundle, src: withSrc })
        .then((res) => {
          if (res.data.errorMessage) {
            alert(res.data.errorMessage);
          }
          console.log(res);
          this.addLogLine({
            content: "Le process a été soumis avec succès.",
            className: "annexe-log--success"
          });

          res.data &&
            res.data.bundleUrl &&
            this.addLogLine({
              content: `Le telechargement de la version de production du projet:  .`,
              url: ` ${END_POINT_URL}${res.data.bundleUrl}`,
              className: "annexe-log--success"
            });
          res.data &&
            res.data.srcUrl &&
            this.addLogLine({
              content: `Le telechargement du code source du projet:   .`,
              url: `${END_POINT_URL}${res.data.srcUrl}`,
              className: "annexe-log--success"
            });
        })
        .catch((e) => {
          this.addLogLine({
            content: "L'operation de soumission du process a été échouée.",
            className: "annexe-log--success"
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
        ? "Désactivation de la generation d'une version de production."
        : "Activation de la generation d'une version de production.",
      className: "annexe-log--info"
    });
    this.setState({ withBundle: !withBundle, isactive: true });
  };

  setWithSrc = () => {
    const { withSrc } = this.state;
    this.addLogLine({
      content: withSrc
        ? "Désactivation de la generation du code source."
        : "Activation de la generation du code source.",
      className: "annexe-log--info"
    });
    this.setState({ withSrc: !withSrc, isactive: true });
  };

  render() {
    const { xmlContent, withBundle, withSrc, logList, isactive } = this.state;

    return (
      <AppLayout title="Bonita React Generator" classes="workspace-layout">
        <div className="container workspace-container">
          <Controls
            withBundle={withBundle}
            withSrc={withSrc}
            setWithBundle={this.setWithBundle}
            setWithSrc={this.setWithSrc}
            fileChangeHandler={this.fileChangeHandler}
            resetClickHandler={this.resetClickHandler}
            submitClickHandler={this.submitClickHandler}
            isactive={isactive}
          />
          {/*<div className="row">*/}
          {/*  <div className="col"></div>*/}
          {/*  <div className="col-8">*/}
          {/*    {loading ? "Please wait..." : "Compile"}*/}
          {/*    <div className="form-group files color">*/}
          {/*      <label>Upload Your File </label>*/}
          {/*      <input*/}
          {/*        type="file"*/}
          {/*        className="form-control"*/}
          {/*        onChange={this.onFileChangeHandler}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*    {loading && <Spinner />}*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="workspace-body-container">
            <div className="row">
              <div className="col-8 pr-0">
                <section className="workspace-body-section">
                  <CodeEditor
                    value={xmlContent}
                    onBeforeChange={(editor, data, value) => {
                      debugger;
                      this.setState({ xmlContent: value });
                    }}
                    onChange={(editor, value) => {
                      debugger;
                      // this.setState({ xmlContent: value })
                      console.log("controlled");
                    }}
                  />
                </section>
              </div>
              <div className="col-4  pl-0">
                <section className="workspace-body-section">
                  <Annexe logList={logList} />
                </section>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default withRouter(Index);
