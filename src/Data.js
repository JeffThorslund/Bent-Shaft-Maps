import React from 'react'
import McCoysMap from "./components/basemaps/McCoys.png";

 const Data = [
  { //"McCoy's Chute Rapid"
    name: "McCoy's Chute Rapid",
    desc: "A great start to the day",
    map: McCoysMap,
    hydraulics: [
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
      },
      {
        //6/8
        name: "6/8",
        desc: "Near football eddy.",
        top: "34vh",
        left: "62vw",
        height: "1.4vh",
        width: "7vh",
        rotation: "rotate(90deg)",
        range: [6, 8]
      },
      {
        //Hero Wave
        name: "Hero Wave",
        desc: "You gotta be a hero.",
        top: "48vh",
        left: "24vw",
        height: "1.4vh",
        width: "7vh",
        rotation: "rotate(130deg)",
        range: [-4, 6]
      }
    ],
    lines: [
      {
        name: "Thread The Needle",
        vector: (
          <path
            d="
                M 15,40
                q 35,3 50,0
                Q 116,33 138,75
                "
            stroke="black"
            stroke-width="0.3"
          />
        ),
        range: [-10, 4]
      },
      {
        name: "Punch Phils",
        vector: (
          <path
            d="
                M 15,40
                q 40,5 72,4
                Q 124,41 138,75
                "
            stroke="black"
            stroke-width="0.3"
          />
        ),
        range: [4, 8]
      },
      {
        name: "Punch Sattlers",
        vector: (
          <path
            d="
                M 15,40
                q 40,-6 72,-1
                Q 120,43 138,75
                "
            stroke="black"
            stroke-width="0.3"
          />
        ),
        range: [8, 12]
      }
    ],
    arrows: [
      {//right
        name: "McCoy's Chute Rapid",
        rotation: "160deg",
        bottom: "9vh",
        right: "11vw"
      }
    ],
    mapLabel: {
      titleTop: "13vh",
      titleLeft: "1vw",
      pointerCoordinates: '-56,50 10,0'
    }
    
  }
];

export default Data
