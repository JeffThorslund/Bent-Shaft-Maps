import React, { useState } from "react";
import "./App.css";

import Rapid from "./components/Rapid";
import Slider from "./components/Slider";
import Map from "./components/Map"
import Data from "./Data";

const App = () => {
  const [level, setLevel] = useState(5);
  const [rapid, setRapid] = useState("McCoy's Chute Rapid");
  const [map, setMap] = useState(false)

  const selectLevel = info => {
    setLevel(info);
  };

  const selectRapid = name => {
    setRapid(name)
  }

  const openMap = () => {
    setMap(!map)
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

  //Map Toggle Text
  const mapTest = (map) => {
    if (map) {
      return "Close Map"
    }

    else if (!map) {
      return "Open Map"
    }

    else{
      console.log('oops')
    }
  }

  return (
    <div className="App">
      <div onClick={openMap} id='map-toggle'>{mapTest(map)}</div>
      <Map map={map} />
      {rapidInstance}
      <Slider selectLevel={selectLevel} />
      
    </div>
  );
};

export default App;
