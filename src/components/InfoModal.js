import React, { Fragment } from 'react';
import CodeEditor from './CodeEditor';

const VIEWS = {
  CONFIRMATION_VIEW: "CONFIRMATION_VIEW",
  EDIT_VIEW: "EDIT_VIEW",
  SUBMIT_SUCCESS_VIEW: "SUBMIT_SUCCESS_VIEW",
}

class InfoModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      view: VIEWS.CONFIRMATION_VIEW,
      xmlContentStaged: props.xmlContent,
    }
  }

  componentDidMount() {
    const { handleHideModal } = this.props;
    window.$("#contractModal").modal('show');
    window.$("#contractModal").on('hidden.bs.modal', handleHideModal);
  }

  handleViewChange(view) {
    this.setState({ view })
  }

  handleSave() {
    const { handleXmlContentChange, addLogLine, handleHideModal } = this.props;
    const { xmlContentStaged } = this.state;
    debugger
    handleXmlContentChange(xmlContentStaged);
    addLogLine({
      content: "XML content edited and saved with success",
      className: "annexe-log--success",
    });
    handleHideModal()
  }

  handleXmlContentStagedChange(value) {
    this.setState({ xmlContentStaged: value })
  }

  render() {
    const { view, xmlContentStaged } = this.state;
    return (
      <Fragment>
        {/* Modal  */}
        <div className="modal fade" id="contractModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              {view === VIEWS.CONFIRMATION_VIEW &&
              <ConfirmationView handleViewChange={(view) => this.handleViewChange(view)} {...this.props} />}
              {view === VIEWS.EDIT_VIEW &&
              <EditXmlView handleViewChange={(view) => this.handleViewChange(view)}
                           xmlContentStaged={xmlContentStaged} {...this.props}
                           handleXmlContentStagedChange={(value) => this.handleXmlContentStagedChange(value)}
                // handleXmlContentStaged={(value) => this.handleXmlContentStagedChange(value)}
                           handleSave={() => this.handleSave()} />}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
};

const ConfirmationView = (props) => {
  const { handleViewChange } = props;

  return (
    <Fragment>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Contract details
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">Here you'll find all information related to the contract</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={() => handleViewChange(VIEWS.EDIT_VIEW)}>
          Edit Process file
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Continue
        </button>
      </div>
    </Fragment>
  )
};

const EditXmlView = (props) => {
  const { xmlContent, xmlContentStaged, handleXmlContentStagedChange, handleSave } = props;

  const xmlModified = xmlContent !== xmlContentStaged;
  debugger
  return (
    <Fragment>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Contract details
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <CodeEditor
          value={xmlContentStaged}
          onBeforeChange={(editor, data, value) => {
            debugger
            handleXmlContentStagedChange(value);
          }}
          onChange={() => {
            console.log("controlled");
          }}
        />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" disabled={!xmlModified} onClick={handleSave}>
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
      </div>
    </Fragment>
  )
};

export default InfoModal;