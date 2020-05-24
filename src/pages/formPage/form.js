import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { AppLayout } from '../../Components/AppLayout';
import { get } from '../../services/apiRest';
import Widget from '../../Components/widgets/Widget';
import { buildInitStateRecursively, getFormElementsRecursively } from '../../services/form';
import "./form.css";
import Spinner from '../../Components/Spinner';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { inputs: [], loading: false };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params: { taskId } } = match;
    this.getTaskContract(taskId);
  }

  getTaskContract = (task_Id) => {
    this.setState({ loading: true })
    get(`/bonita/API/bpm/userTask/${task_Id}/contract`, undefined, true).then((res) => {
      const { inputs } = res.data;
      const initFormState = buildInitStateRecursively(inputs)
      this.setState({ inputs, form: initFormState, loading: false })
    }).catch(e => {
      this.setState({ loading: false })
      console.log(e)
    });
  };

  handleChange = (value, stateName) => {
    const { form } = this.state;
    const nodes = stateName.split('.');
    var index = 0;
    const iterator = (formParam) => {
      if (index === nodes.length - 1) {
        formParam[nodes[index]] = value;
      } else {
        index = index + 1;
        iterator(formParam[nodes[index - 1]])
      }
    };
    iterator(form);
    this.setState({ form })
  };

  getInputValue = (stateName) => {
    const { form } = this.state;
    const nodes = stateName.split('.');
    var result = null;
    var index = 0;
    const iterator = (formParam) => {
      if (index === nodes.length - 1) {
        result = formParam[nodes[index]] || null;
      } else {
        index = index + 1;
        iterator(formParam[nodes[index - 1]])
      }
    };
    iterator(form);
    return result;
  };

  render() {
    const { inputs, loading } = this.state;
    const inputList = getFormElementsRecursively(inputs);

    debugger
    return (
      <div>
        <AppLayout title="Form details">
          {loading && <Spinner /> }
          {
            inputList && inputList.map((complex, index) => {
              return <Widget
                key={`widget-${index + 1}`}
                {...complex}
                handleChange={this.handleChange}
                value={this.getInputValue(complex.stateName)}
              />
            })
          }
        </AppLayout>
      </div>
    );
  }
}

export default withRouter(Form)