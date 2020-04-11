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
        top: "463.55",
        left: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: "rotate(95deg)",
        range: [-10, 12],
      },
      {
        // Sattlers
        name: "Sattler's Hole",
        desc:
          "This wave is at the center of the river. Make sure to clip it when threading the needle!",
        top: "408",
        left: "505.3",
        height: "70.97",
        width: "13.44",
        rotation: "rotate(0deg)",
        range: [-10, 13],
      },
      {
        // Horse Shoe (Right Side)
        name: "Horse Shoe (Right Side)",
        desc: "You better be good kid",
        top: "651.94",
        left: "1081.06",
        height: "42.72",
        width: "15.7",
        rotation: 71.32,
        range: [-10, 5],
      },
      {
        // Horse Shoe (Left Side)
        name: "Horse Shoe (Left Side)",
        desc: "You better be good kid",
        top: "625.94",
        left: "1174.86",
        height: "42.72",
        width: "15.7",
        rotation: 71.32,
        range: [-10, 7],
      },
      {
        // Baby Face
        name: "Baby Face",
        desc: "A great beginner wave.",
        top: "685.65",
        left: "1148.9",
        height: "42.72",
        width: "11.02",
        rotation: 68.5,
        range: [-10, 1],
      },
      {
        // Corner Wave
        name: "Corner Wave",
        desc: "It comes off a corner and can be harder for beginners.",
        top: "470.79",
        left: "905.32",
        height: "90.52",
        width: "13.44",
        rotation: -11.41,
        range: [-10, 12],
      },
      {
        // 6/8
        name: "6/8",
        desc: "Near football eddy.",
        top: "367.83",
        left: "748.9",
        height: "57.31",
        width: "13.44",
        rotation: -5.6,
        range: [6, 8],
      },
      {
        // Hero Wave
        name: "Hero Wave",
        desc: "You gotta be a hero.",
        top: "483.55",
        left: "431.82",
        height: "54.97",
        width: "13.44",
        rotation: -16,
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
            d="M 930,190
                    q 25,-20 50,0
                    t 20,50
                    q -10,40 -40,10
                    q 0,0 -30,-40
                    q -5,-10 0,-20"
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
            d="M 1350.5,570.5
                    q 10,0 20,40
                    q 5,30 -10,10
                    q 0,0 -10,-10
                    q -20,-20 0,-40"
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
                M 150,455
                q 300,58 500,-10
                Q 1000,340 1180,800
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
              M 150,455
              q 350,58 500,30
              Q 1000,400 1180,800
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
                M 150,455
                q 300,-30 500,-20
                Q 1000,450 1180,800
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
