import React, { useEffect } from "react";
import FetchRiverData from "./components/routing/FetchRiverData";
import "./main.css";

//REDUX
import { connect } from "react-redux";
import { startupAction } from "./redux/actions/startupAction";

/**
 * Renders the entire application and imports the stylesheet.
 */

const App = ({ startupAction }) => {
  useEffect(() => {
    startupAction();
  }, []);

  return <FetchRiverData />;
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  startupAction: () => dispatch(startupAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
