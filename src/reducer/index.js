
const initialState = {
  testParam:0,
  error: {
    message: 'Default Message',
    isShown: false,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      const testState = Object.assign({}, state);
      testState.testParam = action.testParam;
      return testState;

    default:
      return state;
  }
};
