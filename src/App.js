import React, { useState } from "react";
import Rapid from "./components/Rapid";
import McCoysMap from "./components/basemaps/McCoys.png";

import "./App.css";

const App = () => {
  const [level, setLevel] = useState("high");

  const selectLevel = (info) => {
    setLevel(info)
  }

  return (
    <div className="App">
      <Rapid
        name="McCoys"
        desc="A great start to the day"
        map={McCoysMap}
        level={level}
        selectLevel={selectLevel}
        features={[
          {
            name: "phils-hole",
            desc: 'a big scary thing',
            high: {
              top: "40vh",
              left: "30vw",
              height: "1vh",
              width: "6vh",
              rotation: "rotate(100deg)"
            },

            low: {
              top: "20vh",
              left: "10vw",
              height: "1vh",
              width: "6vh",
              rotation: "rotate(100deg)"
            }
          },
          {
            name: "sattlers",
            desc: 'punch it of you want',
            high: {
              top: "31vh",
              left: "25vw",
              height: "1vh",
              width: "9vh",
              rotation: "rotate(100deg)"
            },

            low: {
              top: "50vh",
              left: "20vw",
              height: "1vh",
              width: "6vh",
              rotation: "rotate(100deg)"
            },
            
          },


          {
            name: "baby-face",
            desc: 'surfs up buddd',
            high: {
              top: "63vh",
              left: "64vw",
              height: "1vh",
              width: "4vh",
              rotation: "rotate(150deg)"
            },

            low: {
              top: "50vh",
              left: "20vw",
              height: "1vh",
              width: "6vh",
              rotation: "rotate(100deg)"
            },
            
          },

        ]}
      />
    </div>
  );
};

export default App;
