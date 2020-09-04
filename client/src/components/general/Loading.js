import React, { useState, useEffect } from "react";
import Kayak from "../../assets/KayakLogo.png";

/**
 * Loading spinner to be displayed during loading and data fetching.
 */

const Loading = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const messageDic = [
      "Stretching shoulders...",
      "Learning to roll...",
      "Tightening PFD...",
      "Running shuttle...",
      "Packing river snacks...",
      "Rigging rafts...",
    ];

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

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div className="d-flex flex-column align-items-center flex-grow Loading">
      <img src={Kayak} alt="kayak spinner" id="logo" />
      <h2 className="message pt-2">{message}</h2>
    </div>
  );
};

export default Loading;
