import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../stylesheets/Home.css";

const Home = () => {
  return (
    <Link to="/">
      <div className="home">Main Menu</div>
    </Link>
  );
};

export default Home;
