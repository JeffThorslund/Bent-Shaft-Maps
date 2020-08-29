import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalRouter from "./GlobalRouter";

/**
 * Fetches and stores river data from database. Wraps whole application in a React Router.
 */

const FetchRiverData = () => {
  const [rivers, setRivers] = useState(null);
  
  useEffect(() => {
    fetch("/api/getData")
      .then((response) => response.json())
      .then((data) => {
        let filtered = data.filter((river) => river.name !== "Template River");
        setRivers(filtered);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <GlobalRouter rivers={rivers} />
    </Router>
  );
};

export default FetchRiverData