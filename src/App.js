import React, { useState } from "react";
import Rapid from "./components/Rapid";
import "./App.css";
import Slider from "./components/Slider";
import Data from "./Data";

const App = () => {
  const [level, setLevel] = useState(5);
  const [rapid, setRapid] = useState("McCoy's Chute Rapid");

  const selectLevel = info => {
    setLevel(info);
  };

  const selectRapid = name => {
    setRapid(name)
  }

  //Create Rapid Instance

  let rapidInstance;

  for (let i = 0; i < Data.length; i++) {
    if (rapid === Data[i].name) {
      rapidInstance = (
        <Rapid
          name={Data[i].name}
          desc={Data[i].desc}
          map={Data[i].map}
          hydraulics={Data[i].hydraulics}
          lines={Data[i].lines}
          arrows={Data[i].arrows}
          level={level}
          selectLevel={selectLevel}
          selectRapid={selectRapid}
        />
      );
    }
  }

  return (
    <div className="App">
      {rapidInstance}
      <Slider selectLevel={selectLevel} />
    </div>
  );
};

export default App;
