export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_RIVERS":
      return {
        ...state,
        rivers: action.payload,
      };

    default:
      return state;
  }
};
