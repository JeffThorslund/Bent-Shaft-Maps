import React, { useState } from "react";
import Rapid from "./components/Rapid";
import McCoysMap from "./components/basemaps/McCoys1.png";
import Slider from "./components/Slider";
import "./App.css";

const App = () => {
  const [level, setLevel] = useState(5);

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
            top: "48vh",
            left: "45vw",
            height: "2vh",
            width: "10vh",
            rotation: "rotate(95deg)",
            range: [-10, 12]
          },
          {
            //Sattlers
            name: "Sattler's Hole",
            desc:
              "This wave is at the center of the river. Make sure to clip it when threading the needle!",
            top: "39vh",
            left: "34vw",
            height: "2vh",
            width: "10vh",
            rotation: "rotate(95deg)",
            range: [-10, 13]
          },
          {
            //Horse Shoe (Right Side)
            name: "Horse Shoe (Right Side)",
            desc: "You better be good kid",
            top: "61vh",
            left: "80vw",
            height: "1vh",
            width: "5vh",
            rotation: "rotate(130deg)",
            range: [-10, 5]
          },
          {
            //Horse Shoe (Left Side)
            name: "Horse Shoe (Left Side)",
            desc: "You better be good kid",
            top: "66vh",
            left: "75.8vw",
            height: "1vh",
            width: "5vh",
            rotation: "rotate(160deg)",
            range: [-10, 7]
          },
          {
            //Baby Face
            name: "Baby Face",
            desc: "A great beginner wave.",
            top: "69vh",
            left: "79.5vw",
            height: "1vh",
            width: "5vh",
            rotation: "rotate(150deg)",
            range: [-10, 1]
          },
          {
            //Corner Wave
            name: "Corner Wave",
            desc: "It comes off a corner and can be harder for beginners.",
            top: "54vh",
            left: "69.5vw",
            height: "1.4vh",
            width: "7vh",
            rotation: "rotate(110deg)",
            range: [-10, 12]
          }
        ]}
        lines={[
          {
            name: "Thread The Needle",
            vector: (
              <path
                d="
                M 15,40
                q 40,2 50,0
                q 45,-7 65,24
                "
                stroke="black"
                stroke-width="0.3"
              />
            ),
            range: [-10, 12]
          }, 
          {
            name: "Punch the Hole",
            vector: (
              <path
                d="
                M 20,40
                q 40,2 50,10
                "
                stroke="black"
                stroke-width="0.3"
              />
            ),
            range: [-10, 12]
          }
        ]}
      />
      <Slider selectLevel={selectLevel} />
    </div>
  );
};

export default App;
