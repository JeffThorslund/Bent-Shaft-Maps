import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalRouter from "./components/routing/GlobalRouter";
import "./main.css";
import store from "./rematch/store";
import { mockRivers } from "./mockRivers.js";

//REDUX
import { useSelector } from "react-redux";

/**
 * Renders the entire application and imports the stylesheet.
 */

//FLAGS
const useMock = true;

const App = () => {
  useEffect(() => {
    if (useMock === true) {
      store.dispatch.data.fetchRivers(mockRivers);
    } else {
      store.dispatch.data.fetchRiversAsync();
    }
  }, []);

  const rivers = useSelector((state) => state.data.rivers);

  return <Router>{rivers !== null && <GlobalRouter rivers={rivers} />}</Router>;
};

export default App;
