import McCoysChuteRapid from "./basemaps/McCoysChuteRapid";
import IronRingRapid from "./basemaps/middle/IronRingRapid";
import MagicalMysteryTourRapid from "./basemaps/middle/MagicalMysteryTourRapid";
import SBendRapid from "./basemaps/middle/SBendRapid";
import ButteryflyRapid from "./basemaps/middle/ButteryflyRapid";
import LittleTrickleRapid from "./basemaps/middle/LittleTrickleRapid";
import AngelsKissRapid from "./basemaps/middle/AngelsKissRapid";
import GarvinsRapid from "./basemaps/middle/GarvinsRapid";
import UpperNoNameRapid from "./basemaps/middle/UpperNoNameRapid";
import LowerNoNameRapid from "./basemaps/middle/LowerNoNameRapid";
import OverviewMap from "./basemaps/OverviewMap";
import LorneRapid from "./basemaps/main/LorneRapid";
import PushButtonRapid from "./basemaps/main/PushButtonRapid";
import ButchersKnifeRapid from "./basemaps/ButchersKnifeRapid.js";
import NormansRapid from "./basemaps/NormansRapid.js";
import ColiseumRapid from "./basemaps/ColiseumRapid.js";
import DogsLegRapid from "./basemaps/DogsLegRapid.js";
import FarmerBlacksRapid from "./basemaps/FarmerBlacksRapid.js"; //importEntryPoint

export const global = {
  riverName: "Ottawa River",
  riverDesc:
    "The Ottawa River is one of the most popular freestyle rivers in the world, offering many playboating opportunities at almost all water levels. Though the runnability of each rapid varies with water levels, there is a runnable route down the river at all water levels.",
  riverInfo:
    "The put-in located on McCoy Chute Trail, with a clear parking area. There is access to clean outhouses. There are several takeout options. Owl rafting provides a free takeout but requires a significant flatwater section after the rapids. RiverRun has a takeout that costs 15$.",
  putIn: "https://goo.gl/maps/ycePkRuAsvY6EnDR9",
  takeOut: "https://goo.gl/maps/zvRRRfpDGq9Eh1WdA",
  contributors: [
    "Jeffrey Thorslund",
    "Keith Pettinger",
    "Alex Maggs",
    "Jane Leakey",
    "Emily Beirnes",
  ],
  overviewMap: OverviewMap,
};

export const data = [
  {
    name: "McCoy's Chute Rapid",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 50 1600 900",
      path: McCoysChuteRapid,
    },
    hydraulics: [
      {
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
        y: "463.55",
        x: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      }, // Phils Hole
      {
        name: "Sattler's Hole",
        desc:
          "This wave is at the center of the river. Make sure to clip it when threading the needle!",
        y: "408",
        x: "505.3",
        height: "70.97",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      }, // Sattlers
      {
        name: "Horse Shoe (Right Side)",
        desc: "Usually a hole, but is surfable at 4'.",
        y: "651.94",
        x: "1081.06",
        height: "42.72",
        width: "15.7",
        rotation: 71.32,
        range: [-10, 8],
      }, // Horse Shoe (Right Side)
      {
        name: "Horse Shoe (Left Side)",
        desc: "A shallow munchy hole.",
        y: "625.94",
        x: "1174.86",
        height: "42.72",
        width: "15.7",
        rotation: 71.32,
        range: [-10, 8],
      }, // Horse Shoe (Left Side)
      {
        name: "Baby Face",
        desc: "A great beginner wave.",
        y: "685.65",
        x: "1148.9",
        height: "42.72",
        width: "11.02",
        rotation: 68.5,
        range: [-2, 1],
      }, //Baby Face
      {
        name: "Corner Wave",
        desc: "It comes off a corner and can be harder for beginners.",
        y: "470.79",
        x: "920.32",
        height: "90.52",
        width: "13.44",
        rotation: -2,
        range: [-10, 12],
      }, // Corner Wave
      {
        name: "6/8",
        desc: "Near football eddy.",
        y: "367.83",
        x: "790.9",
        height: "57.31",
        width: "13.44",
        rotation: -5.6,
        range: [6, 8],
      }, // 6/8
      {
        name: "Hero Wave",
        desc:
          "A surf wave right above Phil's Hole. Mess this up and you are going straight into Phils. Sometimes a hard wave to catch, much easier in a long boat.",
        y: "490",
        x: "540",
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
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
      {
        name: "Punch Phils",
        desc:
          "Scout to see the point in phils hole is greening out and turning in to a crashy wave. Follow some upstream bubbles to see where you need to be. Line it up and punch it baby!",
        vector: "M 150,455 q 350,58 500,30 Q 1000,400 1180,800",
        range: [-100, 4],
      },
      {
        name: "Punch Sattlers",
        desc:
          "Line up with Sattlers and gun it right through. You will be clear of Phils Hole on this line.",
        vector: "M 150,455 q 100,7 200,0 q 300,-20 400,-15 Q 1100,450 1180,800",
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
      }, // Caution
      {
        type: "Portage",
        desc:
          "This rapid has a very easy portage. Follow the clear trail to the end of the rapid, or stop along the way for clear views of Phil's Hole, Sattlers Hole and other features on this rapid.",
        top: "650",
        left: "200",
      }, // Portage
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
        right: "15vw",
      }, //Little Trickle
      {
        name: "The Lorne",
        rotation: "160deg",
        bottom: "4vh",
        right: "26vw",
      }, //The Lorne
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
        x: "498.11",
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
        vector:
          "M 100,370q 140,-100 250,-60q 150, 60 380, 15q 165, -20 380, 100Q 1250,500 1350,650",
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
        y: "362.54",
        x: "498.11",
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
        vector: "M 150,400q 300,-20 500,0Q 1000,430 1200,400",
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
      x: "23vw",
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
        x: "498.11",
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
      {
        name: "Main Wave",
        desc: "Follow the tounge that goes straight down the center!",
        y: "340.33",
        x: "855.24",
        height: "70.73",
        width: "13.44",
        rotation: "12",
        range: [-10, 12],
      },
    ],
    eddys: [
      {
        name: "Butterfly Lineup",
        desc: "A nice little eddy to catch butterfly.",
        vector:
          "M35.6072 54.5474C23.6426 56.7009 1.13232 55.6119 1.13232 42.588C1.13232 29.5642 8.79183 21.1422 14.5241 12.74C20.2564 4.33788 31.5003 -2.14831 44.1786 1.65414C57.4026 5.62023 56.2793 21.7547 73.436 27.8821C87.8418 33.027 44.1786 53.0046 35.6072 54.5474Z",
        x: "908.13",
        y: "246.54",
        range: [-10, 15],
      },
    ],
    lines: [
      {
        name: "Punch the Wave",
        desc: "Go straight through the hole at the bottom of the drop",
        vector:
          "M 0 0 C89.2728 31.5 137.79 65.5715 187.972 78.4226C242.347 92.3475 301.234 101.075 357.864 102.693C411.595 104.228 516.504 111.229 558.499 115.637C592.445 119.201 718.454 133.16 746.189 139.907C795.948 152.012 919.318 197.078 998.601 224.045",
        x: "408.28",
        y: "258.76",
        range: [-10, 12],
      },
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
      left: "2vw",
      width: "40vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: LittleTrickleRapid,
    },
    hydraulics: [
      {
        name: "Main Drop",
        desc: "Follow the green tongue, on the left half of the horizon line.",
        y: "430.56",
        x: "440.43",
        height: "42.72",
        width: "17.45",
        rotation: "163",
        range: [-10, 12],
      },

      {
        name: "Trickle Hole",
        desc:
          "A shallow munchy hole that wont hesitate to flip a boat if run straight on. Don't swim through this one!",
        y: "396.25",
        x: "498.7",
        height: "42.72",
        width: "11.5",
        rotation: "147",
        range: [-10, 12],
      },

      {
        name: "Lower Wave",
        desc: "A small easy punch.",
        y: "552.99",
        x: "675.56",
        height: "50.47",
        width: "14.61",
        rotation: "-154",
        range: [-10, 12],
      },
    ],
    eddys: [
      {
        name: "Trickle Eddy",
        desc:
          "A great eddy to catch after the first drop and wait for your friends to come down.",
        vector:
          "M8.86312 34.7719C-10.077 18.5939 8.91739 9.41036 21.4898 3.37552C31.3545 -1.35962 46.9801 0.850095 54.2405 3.37548C63.316 6.53221 59.7647 18.5939 54.2405 29.6423C48.7163 40.6908 21.4898 45.5572 8.86312 34.7719Z",
        x: "452.86",
        y: "435.59",
        range: [-10, 10],
      },
    ],
    lines: [
      {
        name: "Standard Line",
        desc:
          "After the drop, take a hard right into the slower moving water, missing the hole downstream.",
        vector:
          "M0 5.35096C27.6872 16.1386 77.0021 19.9915 103.971 16.1387C130.941 12.2859 180.256 0.727661 197.208 0.727661C236.408 0.727661 243.57 20.4735 278.812 41.0605C339.995 76.8009 349.149 75.817 371.495 88.9163C393.841 102.016 721.952 257.32 722.722 266.567",

        x: "248.72",
        y: "409.73",
        range: [-10, 12],
      },
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
        y: "362.54",
        x: "498.11",
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
      left: "65vw",
      width: "30vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: GarvinsRapid,
    },
    hydraulics: [
      {
        name: "Elevator Shaft",
        desc: "A 12 foot waterfall-esque drop.",
        y: "638.38",
        x: "446.27",
        height: "52.58",
        width: "13.44",
        rotation: "7",
        range: [-10, 12],
      },

      {
        name: "Dragon's Tongue",
        desc:
          "A huge green tongue that ends with a small drop into the squirly waters below.",
        y: "502.92",
        x: "601.04",
        height: "63.2",
        width: "13.44",
        rotation: "9.29",
        range: [-10, 12],
      },

      {
        name: "ST Drop",
        desc: "A steep tongue/drop.",
        y: "350.82",
        x: "592.2",
        height: "54.84",
        width: "13.44",
        rotation: "21",
        range: [-10, 12],
      },

      {
        name: "Big Hole at the Bottom",
        desc:
          "A seerious river-wide sticky, munchy hole. Should be avoided hard left or hard right.",
        y: "563.41",
        x: "856.35",
        height: "83.2",
        width: "13.44",
        rotation: "20.68",
        range: [-10, 12],
      },

      {
        name: "Lower Garvins",
        desc:
          "Big huge wave train with surfing at some levels. The first can can range from a laterally curling wave to a beefy hole.",
        y: "455.01",
        x: "1095.21",
        height: "54.84",
        width: "13.44",
        rotation: "23",
        range: [-10, 12],
      },

      {
        name: "Sticky Staircase",
        desc:
          "A sleeper that has the potential to hold a boat and a swimmer, avoid.",
        y: "337.15",
        x: "844.17",
        height: "40.53",
        width: "13.44",
        rotation: "30",
        range: [-10, 12],
      },
    ],
    eddys: [
      {
        name: "Put in Eddy",
        desc:
          "The majority of people walk the upper section of Garvins, put in here, and run the lower.",
        vector:
          "M47.6116 1.61322C30.6623 -0.270127 9.45421 9.48066 2.42009 19.545C-9.11253 36.0459 37.0653 52.7293 47.6116 61.7689C60.7944 73.0683 91.9229 63.9207 83.9003 49.3795C74.5621 32.454 64.5609 3.49657 47.6116 1.61322Z",
        x: "911.58",
        y: "305",
        range: [-10, 10],
      },
    ],
    lines: [
      {
        name: "Elevator Shaft",
        desc:
          "Coming up to the drop, start paddling left to hit the drop with slight left momentum. After the drop, stay right to avoid the huge hole at the bottom of the rapid.",
        vector:
          "M0 28.7981C48.149 32.5384 296.117 23.9401 334.767 6.48539C373.417 -10.9693 485.467 14.634 556.532 37.0759C613.385 55.0294 597.251 49.5415 684.109 72.3989",
        x: "366.77",
        y: "631.71",
        range: [-10, 12],
      },

      {
        name: "Dragon's Tongue",
        desc:
          "Run that puppy then skrrt the hole at the bottom of the rapid to the left.",
        vector:
          "M0 0.914062C61.0678 11.1052 215.216 20.3698 277.528 20.3698C338.68 20.3698 370.704 30.974 427.003 45.7975C467.412 56.4373 527.962 92.6342 602.703 113.016C629.186 120.238 663.856 131.855 678.416 135.252",

        x: "399.89",
        y: "506.91",
        range: [-10, 12],
      },

      {
        name: "ST Chute",
        desc:
          "Run that puppy then skrrt the hole at the bottom of the rapid to the left.",
        vector:
          "M0 0.881592C68.5516 5.58981 136.348 8.41479 174.955 26.3056C213.562 44.1965 275.709 50.7878 306.782 52.6711C337.856 54.5543 371.754 58.3208 433.901 64.9122C496.048 71.5035 524.297 71.5035 578.911 91.2776C633.525 111.052 740.87 161.899 773.827 176.024",

        x: "426.75",
        y: "356.88",
        range: [-10, 12],
      },

      {
        name: "Staircase",
        desc:
          "Run that puppy then skrrt the hole at the bottom of the rapid to the left.",
        vector:
          "M0 1.31836C60.7571 30.5087 148.78 23.6369 189.759 36.1584C257.556 56.8741 277.33 86.0644 323.47 97.3639C382.98 108.663 629.811 208.789 706.71 248.024",

        x: "495.49",
        y: "285.32",
        range: [-10, 12],
      },

      {
        name: "Lower Garvins",
        desc: "Pull out of the eddy, then run the wave train head on.",
        vector:
          "M0 0.591309C-2.59069 7.29936 -2.28483 41.1146 3.60135 51.675C21.1453 83.1508 191.424 138.878 293.075 190.994",

        x: "906.52",
        y: "341.59",
        range: [-10, 12],
      },
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "400",
        left: "300",
      },
      {
        type: "Portage",
        desc:
          "This rapid has a very easy portage. Follow the clear trail to the end of the rapid, or stop along the way for clear views of Phil's Hole, Sattlers Hole and other features on this rapid.",
        top: "120",
        left: "500",
      }, // Portage
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
        y: "362.54",
        x: "498.11",
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
        y: "362.54",
        x: "498.11",
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

  {
    name: "The Lorne",
    desc: "Class III",
    displayPosition: {
      top: "71vh",
      left: "42vw",
      width: "50vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: LorneRapid,
    },
    hydraulics: [
      /*{
        name: "Main Wave",
        desc: "Follow the tounge that goes straight down the center!",
        y: "362.54",
        x: "498.11",
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
        name: "McCoy's Chute Rapid",
        rotation: "160deg",
        bottom: "40vh",
        right: "85vw",
      }, //McCoy's Chute Rapid
      {
        name: "Push Button",
        rotation: "160deg",
        bottom: "40vh",
        right: "5vw",
      }, //McCoy's Chute Rapid
    ],
    mapLabel: {
      titleTop: "58vh",
      titleLeft: "27vw",
      pointerDirection: "top",
      pointerCoordinates: "100,50",
    },
  }, //The Lorne

  {
    name: "Push Button",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "25vw",
      width: "50vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: PushButtonRapid,
    },
    hydraulics: [
      /*{
        name: "Main Wave",
        desc: "Follow the tounge that goes straight down the center!",
        y: "362.54",
        x: "498.11",
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
        name: "The Lorne",
        rotation: "160deg",
        bottom: "40vh",
        right: "87vw",
      }, //The Lorne
      {
        name: "Butchers Knife",
        rotation: "160deg",
        bottom: "45vh",
        right: "5vw",
      }, //The Lorne
    ],
    mapLabel: {
      titleTop: "60vh",
      titleLeft: "38vw",
      pointerDirection: "bottom",
      pointerCoordinates: "20,28",
    },
  }, //Push Button

  {
    name: "Butchers Knife",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "48vw",
      width: "45vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: ButchersKnifeRapid,
    },
    hydraulics: [
      /*{
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
        y: "463.55",
        x: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      },*/
      // Phils Hole
    ],
    eddys: [
      /*{
        name: "Football Eddy",
        desc:
          "A large eddy that can sometimes collect gear and swimmmers. This can sometimes be hard to get out of.",
        vector:
          "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
        x: "725",
        y: "250",
        range: [-10, 10],
      },*/
    ],
    lines: [
      /*{
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      },*/
      //Thread The Needle
    ],
    symbols: [],
    arrows: [
      {
        name: "Push Button",
        rotation: "160deg",
        bottom: "40vh",
        right: "90vw",
      }, //Push Button

      {
        name: "Normans",
        rotation: "160deg",
        bottom: "83vh",
        right: "20vw",
      }, //Normans
    ],
    mapLabel: {
      titleTop: "59vh",
      titleLeft: "38vw",
      pointerDirection: "top",
      pointerCoordinates: "65,75",
    },
  }, // "Push Button"

  {
    name: "Normans",
    desc: "Class III",
    displayPosition: {
      top: "74vh",
      left: "27vw",
      width: "40vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: NormansRapid,
    },
    hydraulics: [
      /*{
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
        y: "463.55",
        x: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      }, */
      // Phils Hole
    ],
    eddys: [
      /*{
        name: "Football Eddy",
        desc:
          "A large eddy that can sometimes collect gear and swimmmers. This can sometimes be hard to get out of.",
        vector:
          "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
        x: "725",
        y: "250",
        range: [-10, 10],
      },*/
    ],
    lines: [
      /*{
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      },*/
      //Thread The Needle
    ],
    symbols: [],
    arrows: [
      {
        name: "Butchers Knife",
        rotation: "160deg",
        bottom: "55vh",
        right: "87vw",
      }, //Butchers Knife

      {
        name: "Coliseum",
        rotation: "160deg",
        bottom: "55vh",
        right: "10vw",
      }, //Coliseum
    ],
    mapLabel: {
      titleTop: "54vh",
      titleLeft: "46vw",
      pointerDirection: "top",
      pointerCoordinates: "45,80",
    },
  }, // "Normans"

  {
    name: "Coliseum",
    desc: "Class III",
    displayPosition: {
      top: "72vh",
      left: "32vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: ColiseumRapid,
    },
    hydraulics: [
      /*{
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
        y: "463.55",
        x: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      },*/
      // Phils Hole
    ],
    eddys: [
      /*{
        name: "Football Eddy",
        desc:
          "A large eddy that can sometimes collect gear and swimmmers. This can sometimes be hard to get out of.",
        vector:
          "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
        x: "725",
        y: "250",
        range: [-10, 10],
      },*/
    ],
    lines: [
      /*{
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, */
      //Thread The Needle
    ],
    symbols: [],
    arrows: [
      {
        name: "Normans",
        rotation: "160deg",
        bottom: "50vh",
        right: "90vw",
      }, //Normans
      {
        name: "Dogs Leg",
        rotation: "160deg",
        bottom: "47vh",
        right: "5vw",
      }, //Normans
    ],
    mapLabel: {
      titleTop: "59vh",
      titleLeft: "53vw",
      pointerDirection: "top",
      pointerCoordinates: "42,50",
    },
  }, // "Coliseum"

  {
    name: "Dogs Leg",
    desc: "Class III",
    displayPosition: {
      top: "73vh",
      left: "35vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: DogsLegRapid,
    },
    hydraulics: [
      /*{
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
        y: "463.55",
        x: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      },*/
      // Phils Hole
    ],
    eddys: [
      /*{
        name: "Football Eddy",
        desc:
          "A large eddy that can sometimes collect gear and swimmmers. This can sometimes be hard to get out of.",
        vector:
          "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
        x: "725",
        y: "250",
        range: [-10, 10],
      },*/
    ],
    lines: [
      /*{
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, */
      //Thread The Needle
    ],
    symbols: [],
    arrows: [
      {
        name: "Farmer Blacks",
        rotation: "160deg",
        bottom: "45vh",
        right: "5vw",
      }, //Farmer Blacks
      {
        name: "Coliseum",
        rotation: "160deg",
        bottom: "55vh",
        right: "88vw",
      }, //Coliseum
    ],
    mapLabel: {
      titleTop: "55vh",
      titleLeft: "59vw",
      pointerDirection: "top",
      pointerCoordinates: "25,47",
    },
  }, // "Dogs Leg"

  {
    name: "Farmer Blacks",
    desc: "Class III",
    displayPosition: {
      top: "72vh",
      left: "21vw",
      width: "30vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: FarmerBlacksRapid,
    },
    hydraulics: [
      /*{
        name: "Phil's Hole",
        desc:
          "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
        y: "463.55",
        x: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      },*/
      // Phils Hole
    ],
    eddys: [
      /*{
        name: "Football Eddy",
        desc:
          "A large eddy that can sometimes collect gear and swimmmers. This can sometimes be hard to get out of.",
        vector:
          "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
        x: "725",
        y: "250",
        range: [-10, 10],
      },*/
    ],
    lines: [
      /*{
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, */
      //Thread The Needle
    ],
    symbols: [],
    arrows: [
      {
        name: "Dogs Leg",
        rotation: "160deg",
        bottom: "47vh",
        right: "87vw",
      }, //Dogs Leg
    ],
    mapLabel: {
      titleTop: "47vh",
      titleLeft: "65vw",
      pointerDirection: "top",
      pointerCoordinates: "15,67",
    },
  }, // "Farmer Blacks" //rapidEntryPoint
];
