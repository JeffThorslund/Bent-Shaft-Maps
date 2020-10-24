export default (state = {}, action) => {
  switch (action.type) {
    case "INITIALIZE_INTERFACE_INDEX":
      return {
        ...state,
        index: 0,
      };

    case "SELECT_RIVER_TO_EDIT":
      return {
        ...state,
        index: action.payload,
      };

    default:
      return state;
  }
};
