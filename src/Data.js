import React from "react";
import McCoysChuteRapid from "./components/VectorAssets/Basemaps/McCoysChuteRapid";
import IronRingRapid from "./components/VectorAssets/Basemaps/IronRingRapid";
import MagicalMysteryTourRapid from "./components/VectorAssets/Basemaps/MagicalMysteryTourRapid";
import SBendRapid from "./components/VectorAssets/Basemaps/SBendRapid";
import ButteryflyRapid from "./components/VectorAssets/Basemaps/ButteryflyRapid";
import LittleTrickleRapid from "./components/VectorAssets/Basemaps/LittleTrickleRapid";
import AngelsKissRapid from "./components/VectorAssets/Basemaps/AngelsKissRapid";
import GarvinsRapid from "./components/VectorAssets/Basemaps/GarvinsRapid";
import UpperNoNameRapid from "./components/VectorAssets/Basemaps/UpperNoNameRapid";
import LowerNoNameRapid from "./components/VectorAssets/Basemaps/LowerNoNameRapid";

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
      path: McCoysChuteRapid,
    },
    hydraulics: [
      {
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
        top: "463.55",
        left: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      }, // Phils Hole
      {
        name: "Sattler's Hole",
        desc:
          "This wave is at the center of the river. Make sure to clip it when threading the needle!",
        top: "408",
        left: "505.3",
        height: "70.97",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      }, // Sattlers
      {
        name: "Horse Shoe (Right Side)",
        desc: "Usually a hole, but is surfable at 4'.",
        top: "651.94",
        left: "1081.06",
        height: "42.72",
        width: "15.7",
        rotation: 71.32,
        range: [-10, 8],
      }, // Horse Shoe (Right Side)
      {
        name: "Horse Shoe (Left Side)",
        desc: "A shallow munchy hole.",
        top: "625.94",
        left: "1174.86",
        height: "42.72",
        width: "15.7",
        rotation: 71.32,
        range: [-10, 8],
      }, // Horse Shoe (Left Side)
      {
        name: "Baby Face",
        desc: "A great beginner wave.",
        top: "685.65",
        left: "1148.9",
        height: "42.72",
        width: "11.02",
        rotation: 68.5,
        range: [-2, 1],
      }, //Baby Face
      {
        name: "Corner Wave",
        desc: "It comes off a corner and can be harder for beginners.",
        top: "470.79",
        left: "920.32",
        height: "90.52",
        width: "13.44",
        rotation: -2,
        range: [-10, 12],
      }, // Corner Wave
      {
        name: "6/8",
        desc: "Near football eddy.",
        top: "367.83",
        left: "790.9",
        height: "57.31",
        width: "13.44",
        rotation: -5.6,
        range: [6, 8],
      }, // 6/8
      {
        name: "Hero Wave",
        desc:
          "A surf wave right above Phil's Hole. Mess this up and you are going straight into Phils. Sometimes a hard wave to catch, much easier in a long boat.",
        top: "490",
        left: "540",
        height: "25.97",
        width: "10.44",
        rotation: -16,
        range: [4, 8],
      }, // Hero Wave
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
      {
        name: "Corner Wave Eddy",
        desc: "This is where you lineup to surf Corner Wave",
        vector:
          "M22.5982 52.6418C36.1714 61.2413 56.4562 71.1586 71.8079 89.7043C78.7111 98.0437 86.4498 66.0895 63.9065 38.5161C35.7272 4.04936 18.0886 11.4521 15.4976 21.2681C12.9067 31.084 8.04205 43.4195 22.5982 52.6418Z",
        x: "935",
        y: "512",
        range: [-10, 10],
      }, //Corner Wave Eddy
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
        range: [-100, 100],
      }, //Thread The Needle
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
        range: [-100, 4],
      },
      {
        name: "Punch Sattlers",
        desc:
          "Line up with Sattlers and gun it right through. You will be clear of Phils Hole on this line.",
        vector: (
          <path
            d="
                M 150,455
                q 100,7 200,0
                q 300,-20 400,-15
                Q 1100,450 1180,800
                "
          />
        ),
        range: [-100, 100],
      },
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      },
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
      {
        name: "Magical Mystery Tour",
        rotation: "160deg",
        bottom: "25vh",
        right: "2vw",
      }, //Magical Mystery Tour
      {
        name: "Little Trickle",
        rotation: "160deg",
        bottom: "4vh",
        right: "17vw",
      }, //Little Trickle
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
      path: MagicalMysteryTourRapid,
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
        desc:
          "Stay in the middle of the channel, as the edges of the river can have caught branches and logs.",
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
        range: [10, 100],
      },
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "240",
        left: "150",
      },
    ],
    arrows: [
      {
        name: "Butterfly",
        rotation: "160deg",
        bottom: "21vh",
        right: "3vw",
      }, //Butterfly
      {
        name: "McCoy's Chute Rapid",
        rotation: "160deg",
        bottom: "42vh",
        right: "85vw",
      }, //McCoy's Chute Rapid
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
      top: "76vh",
      left: "32vw",
      width: "43vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: IronRingRapid,
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
        desc:
          "A violent recirculating eddy that will not be quick to release gear or a swimmer. Avoid!",
        vector:
          "M28.3707 92.6862C48.1874 131.518 72.9544 133.242 84.5083 125.713C98.343 116.697 146.964 66.2616 111.653 54.963C67.8403 40.9439 17.4949 37.6564 10.6929 50.4684C3.89083 63.2805 20.1149 76.5084 28.3707 92.6862Z",
        x: "495",
        y: "425",
        range: [10, 100],
      },
    ],
    lines: [
      {
        name: "Punch the Wave",
        desc:
          "Go straight through the hole at the bottom of the drop. After the drop, the pool is extremely boiley.",
        vector: (
          <path
            d="
                M 150,400
                q 300,-20 500,0
                Q 1000,430 1200,400
                "
          />
        ),
        range: [-10, 8],
      },
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "300",
        left: "250",
      },
    ],
    arrows: [
      {
        name: "S-Bend",
        rotation: "160deg",
        bottom: "55vh",
        right: "10vw",
      }, //S-Bend

      {
        name: "McCoy's Chute Rapid",
        rotation: "160deg",
        bottom: "65vh",
        right: "85vw",
      }, //McCoy's Chute Rapid
    ],
    mapLabel: {
      titleTop: "30vh",
      titleLeft: "35vw",
      pointerDirection: "bottom",
      pointerCoordinates: "80,45",
    },
  }, //Iron Ring

  {
    name: "S-Bend",
    desc: "Class III",
    displayPosition: {
      top: "72vh",
      left: "23vw",
      width: "55vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: SBendRapid,
    },
    hydraulics: [
      /*{
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
      /* {
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
      /*{
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
      },*/
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "400",
        left: "300",
      },
    ],
    arrows: [
      {
        name: "Butterfly",
        rotation: "160deg",
        bottom: "70vh",
        right: "10vw",
      }, //Butterfly

      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "61vh",
        right: "87vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "24vh",
      titleLeft: "40vw",
      pointerDirection: "bottom",
      pointerCoordinates: "50,70",
    },
  }, //S-Bend

  {
    name: "Butterfly",
    desc: "Class III",
    displayPosition: {
      top: "75vh",
      left: "50vw",
      width: "45vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: ButteryflyRapid,
    },
    hydraulics: [
      /*{
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
      /*{
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
      },*/
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "350",
        left: "400",
      },
    ],
    arrows: [
      {
        name: "Garvins",
        rotation: "160deg",
        bottom: "37vh",
        right: "9vw",
      }, //Garvins

      {
        name: "S-Bend",
        rotation: "160deg",
        bottom: "45vh",
        right: "87vw",
      }, //S-Bend

      {
        name: "Magical Mystery Tour",
        rotation: "160deg",
        bottom: "60vh",
        right: "84vw",
      }, //Magical Mystery Tour
    ],
    mapLabel: {
      titleTop: "30vh",
      titleLeft: "45vw",
      pointerDirection: "bottom",
      pointerCoordinates: "38,25",
    },
  }, //Butterfly

  {
    name: "Little Trickle",
    desc: "Class III",
    displayPosition: {
      top: "72vh",
      left: "32vw",
      width: "40vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: LittleTrickleRapid,
    },
    hydraulics: [
      /*{
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
      /*{
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
      },*/
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "400",
        left: "200",
      },
    ],
    arrows: [
      {
        name: "Angel's Kiss",
        rotation: "160deg",
        bottom: "70vh",
        right: "15vw",
      }, //Angel's Kiss

      {
        name: "McCoy's Chute Rapid",
        rotation: "160deg",
        bottom: "65vh",
        right: "87vw",
      }, //McCoy's Chute Rapid
    ],
    mapLabel: {
      titleTop: "30vh",
      titleLeft: "36vw",
      pointerDirection: "top",
      pointerCoordinates: "70,72",
    },
  }, //Little Trickle

  {
    name: "Angel's Kiss",
    desc: "Class III",
    displayPosition: {
      top: "65vh",
      left: "2vw",
      width: "40vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: AngelsKissRapid,
    },
    hydraulics: [
      /*  {
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
      /* {
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
      /*{
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
      },*/
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "300",
        left: "300",
      },
    ],
    arrows: [
      {
        name: "Garvins",
        rotation: "160deg",
        bottom: "60vh",
        right: "10vw",
      }, //Garvins

      {
        name: "Little Trickle",
        rotation: "160deg",
        bottom: "65vh",
        right: "87vw",
      }, //Little Trickle
    ],
    mapLabel: {
      titleTop: "30vh",
      titleLeft: "45vw",
      pointerDirection: "top",
      pointerCoordinates: "0,70",
    },
  }, //Angel's Kiss

  {
    name: "Garvins",
    desc: "Class IV",
    displayPosition: {
      top: "72vh",
      left: "2vw",
      width: "40vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: GarvinsRapid,
    },
    hydraulics: [
      /* {
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
      /*{
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
      },*/
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "400",
        left: "500",
      },
    ],
    arrows: [
      {
        name: "Upper No Name",
        rotation: "160deg",
        bottom: "30vh",
        right: "8vw",
      }, //Upper No Name

      {
        name: "Butterfly",
        rotation: "160deg",
        bottom: "50vh",
        right: "87vw",
      }, //Butterfly
      {
        name: "Angel's Kiss",
        rotation: "160deg",
        bottom: "30vh",
        right: "87vw",
      }, //Angel's Kiss
    ],
    mapLabel: {
      titleTop: "25vh",
      titleLeft: "51vw",
      pointerDirection: "top",
      pointerCoordinates: "60,63",
    },
  }, //Garvins

  {
    name: "Upper No Name",
    desc: "Class III",
    displayPosition: {
      top: "55vh",
      left: "2vw",
      width: "25vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: UpperNoNameRapid,
    },
    hydraulics: [
      /* {
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
      /*  {
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
      /*  {
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
      },*/
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "300",
      },
    ],
    arrows: [
      {
        name: "Lower No Name",
        rotation: "160deg",
        bottom: "45vh",
        right: "8vw",
      }, //Lower No Name

      {
        name: "Garvins",
        rotation: "160deg",
        bottom: "75vh",
        right: "87vw",
      }, //Garvins
    ],
    mapLabel: {
      titleTop: "25vh",
      titleLeft: "53vw",
      pointerDirection: "bottom",
      pointerCoordinates: "85,38",
    },
  }, //Upper No Name

  {
    name: "Lower No Name",
    desc: "Class III",
    displayPosition: {
      top: "68vh",
      left: "2vw",
      width: "40vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: LowerNoNameRapid,
    },
    hydraulics: [
      /*{
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
      /* {
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
      },*/
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "430",
        left: "300",
      },
    ],
    arrows: [
      {
        name: "Upper No Name",
        rotation: "160deg",
        bottom: "40vh",
        right: "87vw",
      }, //Upper No Name
    ],
    mapLabel: {
      titleTop: "22vh",
      titleLeft: "63vw",
      pointerDirection: "bottom",
      pointerCoordinates: "0,50",
    },
  }, //Lower No Name
];

export default Data;
