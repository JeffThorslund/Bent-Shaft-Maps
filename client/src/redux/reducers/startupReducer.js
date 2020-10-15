/*
 src/reducers/simpleReducer.js
*/

export default (state = {}, action) => {
  switch (action.type) {
    case "STARTUP_ACTION":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
