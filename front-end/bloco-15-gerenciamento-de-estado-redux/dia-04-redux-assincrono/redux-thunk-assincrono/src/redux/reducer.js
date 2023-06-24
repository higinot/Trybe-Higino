const INITIAL_STATE = {
  isFetching: false,
  imagePath: "",
  error: "",
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REQUEST_ACTION":
      return { ...state, isFetching: true };
    case "JSON_ACTION":
      return { ...state, imagePath: action.payload, isFetching: false };
    case "FAILED_ACTION":
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

export default myReducer;