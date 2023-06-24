const INITIAL_STATE = {
    state: 'Higino',
  };
  
  function myReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'NEW_ACTION':
        return { ...state, state: action.state};
      default:
        return state;
    }
  }
  
  export default myReducer;