/*
 src/actions/simpleAction.js
*/

export const startupAction = () => (dispatch) => {
  dispatch({
    type: "STARTUP_ACTION",
    payload: "result_of_startup_action",
  });
};
