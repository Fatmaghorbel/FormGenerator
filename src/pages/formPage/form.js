import React, { Component } from "react";
import "./form.css";
import { AppLayout } from '../../Components/AppLayout';
import { withRouter } from 'react-router-dom';
import { get } from '../../services/apiRest';
import Widget from '../../Components/widgets/Widget';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {inputs: []};
  }

  buildInitStateRecursively = function (input) {
    var initState = {};
    (Array.isArray(input) ? input : input.inputs).forEach(input => {
      if (input.inputs.length === 0) {
        initState = { ...initState, [input.name]: null }
      } else {
        this.buildInitStateRecursively(input)
      }
    })
    if (input.name) {
      initState = { [input.name]: initState }
    }
    return initState;
  };

  getFormElementsRecursively = function (input) {
    var inputList = []
    (Array.isArray(input) ? input : input.inputs).forEach(input => {
      if (input.inputs.length === 0) {
        inputList = [{ ...input, stateName: input.name }, ...inputList]
      } else {
        this.getFormElementsRecursively(input)
      }
    })
    if (input.name) {
      inputList = inputList.map(inp => ({ ...inp, stateName: `${input.name}.${inp.stateName}` }))
    }
    return inputList
  };

  componentDidMount() {
    const { match } = this.props;
    const { params: { taskId } } = match;
    this.getTaskContract(taskId);
  }

  getTaskContract = (task_Id) => {
    get(`/bonita/API/bpm/userTask/${task_Id}/contract`, undefined, true).then((res) => {
      const { inputs } = res.data;
      const initState = this.buildInitStateRecursively(inputs)
      this.setState({ inputs, form: initState })
    });
  };

  render() {
    const { inputs } = this.state;
    const inputList = this.getFormElementsRecursively(inputs);

    return (
      <div>
        <AppLayout title="Form details">
          <p>hello Form</p>
          {
            inputs && inputs.map(complexe => {
              return <Widget {...complexe} />
            })
          }
        </AppLayout>
      </div>
    );
  }
}

export default withRouter(Form)