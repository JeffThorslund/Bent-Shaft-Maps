import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalRouter from "./components/interface/home/GlobalRouter";

const App = () => {
  const [rivers, setRivers] = useState(null);

  //fetches an array of rivers from the database
  useEffect(() => {
    fetch("/api/getData")
      .then((response) => response.json())
      .then((data) => {
        let filtered = data.filter((river) => river.name !== "Template River");
        setRivers(filtered);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <Router>
      <GlobalRouter rivers={rivers} />
    </Router>
  );
};

export default App;
