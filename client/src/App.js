import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalRouter from "./components/routing/GlobalRouter";
import "./main.css";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchRivers } from "./redux/actions/startupAction";

/**
 * Renders the entire application and imports the stylesheet.
 */

const App = () => {
  const dispatch = useDispatch();
  const rivers = useSelector((state) => state.startupReducer.rivers);

  useEffect(() => {
    fetchRivers()(dispatch);
  }, []);

  //enableAllPlugins();

  return (
    <Router>
      <GlobalRouter rivers={rivers} />
    </Router>
  );
};

export default App;
