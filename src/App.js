import React, { Suspense } from "react";
import GlobalRouter from "./components/interface/GlobalRouter.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  console.log("App is rendered");
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <GlobalRouter />
      </Suspense>
    </Router>
  );
};

export default App;
