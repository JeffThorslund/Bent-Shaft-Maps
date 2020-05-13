import React, { Suspense } from "react";
import RiverImporter from "./components/interface/RiverImporter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <RiverImporter />
      </Suspense>
    </Router>
  );
};

export default App;
