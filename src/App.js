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
        hydraulics={[
          {//Phils Hole
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
          {//Sattlers
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
          {//Baby Face
            name: "baby-face",
            desc: 'surfs upj',
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
        lines={[
          {
            name: 'Thread The Needle',
            vector: <path
            d="
            M -22,37 
            q 18,5 30,0
            q 15,-5 30,2
            t 28,7
            q 10,1 20,30
          "
            stroke="black"
            stroke-width = '0.5'
          />
          }
        ]}
      />
    </div>
  );
};

export default App;
