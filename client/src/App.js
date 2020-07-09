import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalRouter from "./components/interface/GlobalRouter";
import io from "socket.io-client";
const axios = require("axios").default;

const App = () => {
  const [rivers, setRivers] = useState(null);

  const getRiverData = () => {
    fetch("/api/getData")
      .then((response) => response.json())
      .then((data) => {
        let filtered = data.filter((river) => river.name !== "Template River");
        setRivers(filtered);
      })
      .catch((err) => console.log(err));
    }

  useEffect(() => {
    const socket = io();
    socket.on("connection", () => {
      console.log("printed from useeffect");
    });
    socket.on("update", () => {
      console.log("Updated from Client")
      getRiverData();
    });
  }, []);

  return (
    <Router>
      <GlobalRouter getRiverData={getRiverData} rivers={rivers} />
    </Router>
  );
};

export default App;
