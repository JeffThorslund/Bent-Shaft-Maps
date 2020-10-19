import React, { useEffect } from "react";
import FetchRiverData from "./components/routing/FetchRiverData";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalRouter from "./components/routing/GlobalRouter";
import "./main.css";

//REDUX
import { connect } from "react-redux";
import { startupAction, testAction } from "./redux/actions/startupAction";
import { fetchRivers } from "./redux/actions/riverActions";
import store from "./redux/store";

/**
 * Renders the entire application and imports the stylesheet.
 */

const App = ({ fetchRivers, startupReducer }) => {
  useEffect(() => {
    fetchRivers();
  }, []);
  return (
    <Router>
      <GlobalRouter rivers={startupReducer.rivers} />
    </Router>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  startupAction: () => dispatch(startupAction),
  testAction: () => dispatch(testAction),
  fetchRivers: () => dispatch(fetchRivers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
