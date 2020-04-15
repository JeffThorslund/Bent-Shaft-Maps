import React from "react";
import BaseMapMcCoys from "./components/VectorAssets/Basemaps/McCoysChuteRapid";
import BaseIronRing from "./components/VectorAssets/Basemaps/IronRingRapid";
import BaseMagicalMysteryTour from "./components/VectorAssets/Basemaps/MagicalMysteryTourRapid";

const Data = [
  {
    name: "McCoy's Chute Rapid",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 50 1600 900", //Eeeeek watch out for this
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
        rotation: 1,
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
        rotation: 1,
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
        vector:
          "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
        x: "725",
        y: "250",
        range: [-10, 10],
      },
      {
        name: "Baby Face Lineup",
        desc:
          "This is where you lineup to surf Baby Face. Remember to wait your turn!",
        vector:
          "M22.9304 64.2715C42.747 103.103 71.7515 101.303 83.3053 93.7738C97.14 84.7583 102.113 75.7178 76.7682 48.66C45.0867 14.8377 22.5248 13.7363 15.7227 26.5483C8.92069 39.3604 14.6745 48.0937 22.9304 64.2715Z",
        x: "1165.1",
        y: "640.17",
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
          />
        ),
        range: [8, 12],
      },
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "3vh",
        right: "5vw",
      },
      {
        name: "Magical Mystery Tour",
        rotation: "160deg",
        bottom: "3vh",
        right: "17vw",
      },
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "McCoy's Chute Rapid"

  {
    name: "Magical Mystery Tour",
    desc: "Class II",
    displayPosition: {
      top: "72vh",
      left: "15vw",
      width: "50vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: BaseMagicalMysteryTour,
    },
    hydraulics: [
      /*{
        // Phils Hole
        name: "Main Wave",
        desc: "Follow the tounge that goes straight down the center!",
        top: "362.54",
        left: "498.11",
        height: "58.73",
        width: "13.44",
        rotation: "-1",
        range: [-10, 12],
      },*/
    ],
    eddys: [
      /*{
        name: "Room of Doom",
        desc: "A very bad place for a swimmer to be in.",
        vector:
          "M28.3707 92.6862C48.1874 131.518 72.9544 133.242 84.5083 125.713C98.343 116.697 146.964 66.2616 111.653 54.963C67.8403 40.9439 17.4949 37.6564 10.6929 50.4684C3.89083 63.2805 20.1149 76.5084 28.3707 92.6862Z",
        x: "495",
        y: "425",
        range: [-10, 10],
      },*/
    ],
    lines: [
      {
        name: "Chill Out",
        desc: "Follow the current and enjoy the lazy river-esque ride.",
        vector: (
          <path
            d="
                M 100,370
                q 140,-100 250,-60
                q 150, 60 380, 15
                q 165, -20 380, 100
                Q 1250,500 1350,650
                "
          />
        ),
        range: [-10, 12],
      },
    ],
    arrows: [
      {
        name: "Butterfly",
        rotation: "160deg",
        bottom: "21vh",
        right: "3vw",
      },
      {
        name: "McCoy's Chute Rapid",
        rotation: "160deg",
        bottom: "47vh",
        right: "87vw",
      },
    ],
    mapLabel: {
      titleTop: "30vh",
      titleLeft: "23vw",
      pointerDirection: "right",
      pointerCoordinates: "40,50",
    },
  }, //Magical Mystery Tour

  {
    // "Iron Ring"
    name: "Iron Ring",
    desc: "Class III",
    displayPosition: {
      top: "72vh",
      left: "32vw",
      width: "40vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: BaseIronRing,
    },
    hydraulics: [
      {
        // Phils Hole
        name: "Main Wave",
        desc: "Follow the tounge that goes straight down the center!",
        top: "362.54",
        left: "498.11",
        height: "58.73",
        width: "13.44",
        rotation: "-1",
        range: [-10, 12],
      },
    ],
    eddys: [
      {
        name: "Room of Doom",
        desc: "A very bad place for a swimmer to be in.",
        vector:
          "M28.3707 92.6862C48.1874 131.518 72.9544 133.242 84.5083 125.713C98.343 116.697 146.964 66.2616 111.653 54.963C67.8403 40.9439 17.4949 37.6564 10.6929 50.4684C3.89083 63.2805 20.1149 76.5084 28.3707 92.6862Z",
        x: "495",
        y: "425",
        range: [-10, 10],
      },
    ],
    lines: [
      {
        name: "Punch the Wave",
        desc: "Go straight through the hole at the bottom of the drop",
        vector: (
          <path
            d="
                M 150,400
                q 300,-20 500,0
                Q 1000,430 1200,400
                "
          />
        ),
        range: [-10, 12],
      },
    ],
    arrows: [
      {
        name: "Little Trickle",
        rotation: "160deg",
        bottom: "70vh",
        right: "10vw",
      },
      {
        name: "S-Bend",
        rotation: "160deg",
        bottom: "30vh",
        right: "12vw",
      },
      {
        name: "McCoy's Chute Rapid",
        rotation: "160deg",
        bottom: "65vh",
        right: "85vw",
      },
    ],
    mapLabel: {
      titleTop: "30vh",
      titleLeft: "35vw",
      pointerDirection: "bottom",
      pointerCoordinates: "80,45",
    },
  }, //Iron Ring
];

export default Data;
