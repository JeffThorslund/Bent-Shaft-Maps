import React from "react";
import GlobalRouter from "./components/Interface/GlobalRouter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  console.log("App is rendered");
  return (
    <Router>
      <GlobalRouter />
    </Router>
  );
};

export default App;
