import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalRouter from "./components/interface/GlobalRouter";
import io from "socket.io-client";
const axios = require("axios").default;

const App = () => {

  const [rivers, setRivers] = useState(null);

  const getRiverData = (address, path) => {
    axios
      .post(address, {
        path: path,
      })
      .then((response) => {
        let filtered = response.data.rivers.filter(
          (river) => river.name !== "Template River"
        );
        setRivers(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const socket = io();
    socket.on("connection", () => {
      console.log("printed from useeffect");
    });
    socket.on("update", () => {
      console.log("Updated from Client")
      getRiverData("/api/getData", "./client/src/river-data");
    });
  },[]);

  return (
    <Router>
      <GlobalRouter getRiverData={getRiverData} rivers={rivers}/>
    </Router>
  );
};

export default App;
