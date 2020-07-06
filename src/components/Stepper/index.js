import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import StepperBundled from 'bs-stepper'

class Stepper extends React.Component {
  constructor() {
    super();
    this.stepperRef = React.createRef();
  }

  componentDidMount() {
    this.stepper1 = new StepperBundled(this.stepperRef.current)
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

    // 9addech ?

  }

  buildContent() {
    const { steps } = this.props;
    return steps.map((step, index) => {
      if (index === 0) {
        return (
          <div id={`test-l-${index + 1}`} className="content">
            {step.content}
            <button className="btn btn-primary" onClick={() => this.stepper1.next()}>Next</button>
          </div>
        )
      } else if (index === steps.length - 1) {
        return (<div id={`test-l-${index + 1}`} className="content">
          {step.content}
          <button className="btn btn-primary" onClick={() => this.stepper1.previous()}>Previous</button>
        </div>)
      } else {
        return (<div id={`test-l-${index + 1}`} className="content">
          {step.content}
          <button className="btn btn-primary" onClick={() => this.stepper1.previous()}>Previous</button>
          <button className="btn btn-primary" onClick={() => this.stepper1.next()}>Next</button>
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

// chnow bech n7ottou f step1 ? upload ?