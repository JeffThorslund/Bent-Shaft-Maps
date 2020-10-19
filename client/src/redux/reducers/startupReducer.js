/*
 src/reducers/simpleReducer.js
*/

export default (state = {}, action) => {
  switch (action.type) {
    case "STARTUP_ACTION":
      return {
        result: action.payload,
      };

      case "FETCH_RIVERS":
        return {
          rivers: action.payload,
        };

    case "TEST_ACTION":
      return {
        resulting: "TESTER GOOD",
      };
    default:
      return state;
  }
};
