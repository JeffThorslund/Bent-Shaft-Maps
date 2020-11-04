import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalRouter from "./components/routing/GlobalRouter";
import "./main.css";
import store from "./rematch/store";

//REDUX
import { useSelector } from "react-redux";

/**
 * Renders the entire application and imports the stylesheet.
 */

const App = () => {
  useEffect(() => {
    store.dispatch.data.fetchRiversAsync();
  }, []);

  const rivers = useSelector((state) => state.data.rivers);

  return <Router>{rivers !== null && <GlobalRouter rivers={rivers} />}</Router>;
};

export default App;
