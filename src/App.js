import React, { useState } from "react";
import Rapid from "./components/Rapid";
import McCoysMap from "./components/basemaps/McCoys.png";

import "./App.css";
import WaterLevel from "./components/WaterLevel";

const App = () => {
  const [level, setLevel] = useState([0, 1]);

  const selectLevel = info => {
    setLevel(info);
  };

  return (
    <div className="App">
      <Rapid
        name="McCoy's Chute Rapid"
        desc="A great start to the day"
        map={McCoysMap}
        level={level}
        selectLevel={selectLevel}
        hydraulics={[
          {
            //Phils Hole
            name: "Phil's Hole",
            desc:
              "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. At high water, the hole is not present, only a large surf wave. At lower water levels, a large hole is formed with a tongue a little left of centre.",
            top: "40vh",
            left: "30vw",
            height: "1vh",
            width: "6vh",
            rotation: "rotate(100deg)",
            range: [1, 5]
          },
          {
            //Sattlers
            name: "Sattler's Hole",
            desc: "This wave is at the center of the river. Make sure to clip it when threading the needle!",
            top: "31vh",
            left: "25vw",
            height: "1vh",
            width: "9vh",
            rotation: "rotate(100deg)",
            range: [4, 10]
          },
          {
            //Baby Face
            name: "Baby Face",
            desc: "Fantastic Beginner surf wave for learning the basics.",
            top: "63vh",
            left: "64vw",
            height: "1vh",
            width: "4vh",
            rotation: "rotate(150deg)",
            range: [3, 20]
          }
        ]}
        lines={[
          {
            name: "Thread The Needle",
            vector: (
              <path
                d="
            M -22,37 
            q 18,5 30,0
            q 15,-5 30,2
            t 28,7
            q 10,1 20,30"
                stroke="black"
                stroke-width="0.5"
              />
            ),
            range: [0, 5]
          }
        ]}
      />

      <div id="gauge">
        <WaterLevel selectLevel={selectLevel} />
      </div>
    </div>
  );
};

export default App;
