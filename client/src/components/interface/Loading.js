import React, { useState, useEffect } from "react";
import "./Loading.css";
import Kayak from "./KayakLogo.png";

const Loading = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    //shuffle the array of phrases
    shuffleArray(messageDic);

    //set the message as the last one
    setMessage(messageDic[messageDic.length - 1]);

    //cycles through all messages and restarts at end of list
    let i = 0;
    const interval = setInterval(() => {
      setMessage(messageDic[i]);
      if (i < messageDic.length - 1) {
        i++;
      } else {
        i = 0;
      }
    }, 750);

    return () => clearInterval(interval);
  }, []);

  const messageDic = [
    "Stretching shoulders...",
    "Learning to roll...",
    "Tightening PFD...",
    "Running shuttle...",
    "Packing river snacks...",
    "Rigging rafts...",
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div className="Loading">
      <img src={Kayak} alt="kayak spinner" id="logo" />
      <div className="message">{message}</div>
    </div>
  );
};

export default Loading;
