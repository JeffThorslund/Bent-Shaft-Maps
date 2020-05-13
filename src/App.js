import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalRouter from "./components/interface/GlobalRouter";

const App = () => {
  return (
    <Router>
      <GlobalRouter />
    </Router>
  );
};

export default App;
