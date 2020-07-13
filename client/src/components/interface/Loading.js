import React, { useState, useEffect } from "react";
import "./Loading.css";
import Kayak from "./KayakLogo.png";

const Loading = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    messageCycle(messageDic);
  }, []);

  const messageDic = [
    "Giving highfives...",
    "Stretching shoulders...",
    "Getting stoked...",
    "Tightening life jacket...",
  ];

  const messageCycle = (messageDic) => {
    let randomInt = Math.floor(Math.random() * Math.floor(messageDic.length));
    setMessage(messageDic[randomInt]);
  };

  return (
    <div className="Loading">
      <img src={Kayak} alt="kayak spinner" id="logo" />
      <div className="message">{message}</div>
    </div>
  );
};

export default Loading;
