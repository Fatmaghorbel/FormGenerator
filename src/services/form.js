export const buildInitStateRecursively = function (inputs) {
  var initState = {};
  const iterator = (inputParam) => {
    (Array.isArray(inputParam) ? inputParam : inputParam.inputs).forEach(input => {
      if (input.inputs.length === 0) {
        initState = { ...initState, [input.name]: null }
      } else {
        iterator(input)
      }
    });
    if (inputParam.name) {
      initState = { [inputParam.name]: initState }
    }
  };
  iterator(inputs);
  return initState;
};

export const getFormElementsRecursively = (inputs) => {
  var inputList = [];
  const iterator = (inputParam) => {
    (Array.isArray(inputParam) ? inputParam : inputParam.inputs).forEach(input => {
      if (input.inputs.length === 0) {
        inputList = [{ ...input, stateName: input.name }, ...inputList]
      } else {
        iterator(input)
      }
    });
    if (inputParam.name) inputList = inputList.map(inp => ({
      ...inp,
      stateName: `${inputParam.name}.${inp.stateName}`,
    }))
  };
  iterator(inputs);
  return inputList;
};
