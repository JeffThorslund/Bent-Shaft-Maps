import React from "react";
import BaseMapMcCoys from "./components/VectorAssets/Basemaps/McCoysChuteRapid";

const Data = [
  {
    // "McCoy's Chute Rapid"
    name: "McCoy's Chute Rapid",
    desc: "A great start to the day",
    //build map at 1600x900
    riverMap: {
      viewBox: "0 0 1600 900",
      path: BaseMapMcCoys,
    },
    hydraulics: [
      {
        // Phils Hole
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. At high water, the hole is not present, only a large surf wave. At lower water levels, a large hole is formed with a tongue a little left of centre. ",
        top: "51vh",
        left: "39vw",
        height: "10px",
        width: "10px",
        rotation: "rotate(95deg)",
        range: [-10, 12],
      },
      {
        // Sattlers
        name: "Sattler's Hole",
        desc:
          "This wave is at the center of the river. Make sure to clip it when threading the needle!",
        top: "43vh",
        left: "30vw",
        height: "4vh",
        width: "10vh",
        rotation: "rotate(95deg)",
        range: [-10, 13],
      },
      {
        // Horse Shoe (Right Side)
        name: "Horse Shoe (Right Side)",
        desc: "You better be good kid",
        top: "73vh",
        left: "65vw",
        height: "2.5vh",
        width: "6vh",
        rotation: "rotate(165deg)",
        range: [-10, 5],
      },
      {
        // Horse Shoe (Left Side)
        name: "Horse Shoe (Left Side)",
        desc: "You better be good kid",
        top: "70vh",
        left: "71vw",
        height: "2.5vh",
        width: "6vh",
        rotation: "rotate(160deg)",
        range: [-10, 7],
      },
      {
        // Baby Face
        name: "Baby Face",
        desc: "A great beginner wave.",
        top: "80vh",
        left: "70vw",
        height: "3vh",
        width: "6vh",
        rotation: "rotate(160deg)",
        range: [-10, 1],
      },
      {
        // Corner Wave
        name: "Corner Wave",
        desc: "It comes off a corner and can be harder for beginners.",
        top: "54vh",
        left: "69.5vw",
        height: "1.4vh",
        width: "7vh",
        rotation: "rotate(110deg)",
        range: [-10, 12],
      },
      {
        // 6/8
        name: "6/8",
        desc: "Near football eddy.",
        top: "34vh",
        left: "62vw",
        height: "1.4vh",
        width: "7vh",
        rotation: "rotate(90deg)",
        range: [6, 8],
      },
      {
        // Hero Wave
        name: "Hero Wave",
        desc: "You gotta be a hero.",
        top: "48vh",
        left: "24vw",
        height: "1.4vh",
        width: "7vh",
        rotation: "rotate(130deg)",
        range: [-4, 6],
      },
    ],
    eddys: [
      {
        name: "Football Eddy",
        desc:
          "A large eddy that can sometimes collect gear and swimmmers. This can sometimes be hard to get out of.",
        vector: (
          <path
            d="M 93,19
                    q 2.5  ,-2 5,0
                    t 2,5
                    q -1,4 -4,1
                    q 0,0 -3,-4
                    q -0.5,-1 0,-2"
          />
        ),
        range: [-10, 10],
      },
      {
        name: "Baby Face Lineup",
        desc:
          "This is where you lineup to surf Baby Face. Remember to wait your turn!",
        vector: (
          <path
            d="M 135.5,57.5
                    q 1,0 2,4
                    q 0.5,3 -1,1
                    q 0,0 -1,-1
                    q -2,-2 0,-4"
          />
        ),
        range: [-10, 10],
      },
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: (
          <path
            d="
                M 150,400
                q 350,30 500,0
                Q 1160,330 1380,750
                "
            stroke="black"
          />
        ),
        range: [-10, 4],
      },
      {
        name: "Punch Phils",
        desc:
          "Scout to see the point in phils hole is greening out and turning in to a crashy wave. Follow some upstream bubbles to see where you need to be. Line it up and punch it baby!",
        vector: (
          <path
            d="
                M 150,400
                q 400,50 720,40
                Q 1240,410 1380,750
                "
            stroke="black"
          />
        ),
        range: [4, 8],
      },
      {
        name: "Punch Sattlers",
        desc:
          "Line up with Sattlers and gun it right through. You will be clear of Phils Hole on this line.",
        vector: (
          <path
            d="
                M 150,400
                q 400,-60 720,-10
                Q 1200,430 1380,750
                "
            stroke="black"
          />
        ),
        range: [8, 12],
      },
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "2vh",
        right: "5vw",
      },
      {
        name: "Magical Mystery Tour",
        rotation: "160deg",
        bottom: "2vh",
        right: "17vw",
      },
    ],
    mapLabel: {
      titleTop: "13vh",
      titleLeft: "1vw",
      pointerCoordinates: "-56,50 10,0",
    },
  },
];

export default Data;
