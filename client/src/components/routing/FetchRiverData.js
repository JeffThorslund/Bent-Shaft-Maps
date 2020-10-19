import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalRouter from "./GlobalRouter";

/**
 * Fetches an array of all the rivers in the database. 
 * Stores this river data in state. 
 * Wraps whole application in a React Router.
 */

const FetchRiverData = () => {
  const [rivers, setRivers] = useState(null);

  
  
  useEffect(() => {
    fetch("/api/getRivers")
      .then((response) => response.json())
      .then((data) => {
        setRivers(data);
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