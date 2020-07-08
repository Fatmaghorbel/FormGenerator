import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import StepperBundled from 'bs-stepper'
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import './index.css'
import SubmitButton from './SubmitButton';

class Stepper extends React.Component {
  constructor() {
    super();
    this.state = {
      stepOrder: 0
    };
    this.stepperRef = React.createRef();
  }

  componentDidMount() {
    this.stepper1 = new StepperBundled(this.stepperRef.current)
  }

  handleNext() {
    const {addLogLine, steps} = this.props;
    const {stepOrder} = this.state;
    debugger
    addLogLine({
      content: `Go to step: ${steps[stepOrder + 1] && steps[stepOrder + 1].title}`,
      className: "annexe-log--info",
    });
    this;this.setState({stepOrder: stepOrder + 1})
    this.stepper1.next()
  }

  handlePrevious() {
    const {addLogLine, steps} = this.props;
    const {stepOrder} = this.state;
    addLogLine({
      content: `Go to step: ${steps[stepOrder - 1] && steps[stepOrder - 1].title}`,
      className: "annexe-log--info",
    });
    this;this.setState({stepOrder: stepOrder - 1})
    this.stepper1.previous()
  }

  handleSubmit() {
    const {addLogLine, handleSubmit} = this.props;
    addLogLine({
      content: "Submitting contract",
      className: "annexe-log--info",
    });
    handleSubmit()
  }

  buildHeader() {
    const { steps } = this.props;
    return steps.map((step, index) => {
      if (index === steps.length - 1) {
        return (<div className="step" data-target={`#test-l-${index + 1}`}>
          <button type="button" className="btn step-trigger">
            <span className="bs-stepper-circle">{index + 1}</span>
            <span className="bs-stepper-label">{step.title}</span>
          </button>
        </div>)
      }
      return (
        <Fragment>
          <div className="step" data-target={`#test-l-${index + 1}`}>
            <button type="button" className="btn step-trigger">
              <span className="bs-stepper-circle">{index + 1}</span>
              <span className="bs-stepper-label">{step.title}</span>
            </button>
          </div>
          <div className="line"></div>
        </Fragment>
      )
    })
  }

  buildContent() {
    const { steps, handleSubmit } = this.props;
    return steps.map((step, index) => {
      if (index === 0) {
        return (
          <div id={`test-l-${index + 1}`} className="content">
            {step.content}
            <div className="stepper-controller-container">
              <NextButton handleOnClick={() => this.handleNext()} />
            </div>
          </div>
        )
      } else if (index === steps.length - 1) {
        return (<div id={`test-l-${index + 1}`} className="content">
          {step.content}
          <div className="stepper-controller-container">
            <PreviousButton handleOnClick={() => this.handlePrevious()} />
            <SubmitButton handleOnClick={() => this.handleSubmit()}/>
          </div>
        </div>)
      } else {
        return (<div id={`test-l-${index + 1}`} className="content">
          {step.content}
          <div className="stepper-controller-container">
            <PreviousButton handleOnClick={() => this.handlePrevious()} />
            <NextButton handleOnClick={() => this.handleNext()} />
          </div>
        </div>)
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div className="col-md-12 mt-2">
          <div id="stepper1" className="bs-stepper" ref={this.stepperRef}>
            <div className="bs-stepper-header">
              {this.buildHeader()}
            </div>
            <div className="bs-stepper-content">
              {this.buildContent()}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Stepper;

