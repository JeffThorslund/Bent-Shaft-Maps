import TemplateRapid from "./basemaps/TemplateRapid";
import Welcome from "./basemaps/TemplateWelcome";
import OverviewMap from "./basemaps/TemplateOverviewMap";
import FangRapid from "./basemaps/FangRapid.js";
import BingoRapid from "./basemaps/BingoRapid.js";
import JuicyRapid from "./basemaps/JuicyRapid.js";
import OrganicRapid from "./basemaps/OrganicRapid.js";
import BongHitRapid from "./basemaps/BongHitRapid.js";
import ShakaBRooRapid from "./basemaps/ShakaBRooRapid.js";
import BonkRapid from "./basemaps/BonkRapid.js"; //importEntryPoint

export const global = {
  riverName: "Jeff River",
  riverDesc: "riverDesc",
  riverInfo: "riverInfo",
  putInCoords: "45.747890, -76.792082",
  riverMap: {
    viewBox: "0 0 1600 900",
    path: Welcome,
  },
  overviewMap: OverviewMap,
};

export const data = [
  {
    name: "Template Rapid",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: TemplateRapid,
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
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "McCoy's Chute Rapid"
  {
    name: "Fang",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: FangRapid,
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
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "Fang"
  {
    name: "bingo",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: BingoRapid,
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
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "Bingo"
  {
    name: "Juicy",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: JuicyRapid,
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
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "Juicy"
  {
    name: "Organic",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: OrganicRapid,
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
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "Organic"
  {
    name: "bongHIT",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: BongHitRapid,
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
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "Bonghit"
  {
    name: "ShakaBRoo",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: ShakaBRooRapid,
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
    ],
    lines: [
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Thread The Needle
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Iron Ring",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Iron Ring
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "Shakabroo"
  {
    name: "Bonk",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: BonkRapid,
    },
    hydraulics: [
      {
        name: "Booty Beer Wave",
        desc:
          "Add information about the feature. Is it a ledge, hole or wave? Is it shallow, sticky, trashy, glassy, flushy? Is there a certain level where it is prime for surfing, or maybe especially dangerous?",
        y: "463.55",
        x: "589.11",
        height: "58.73",
        width: "13.44",
        rotation: 1,
        range: [-10, 13],
      }, //Booty Beer Wave
    ],
    eddys: [
      {
        name: "Hotshot Eddy",
        desc:
          "What is this eddy used for? Is it easy to catch? Difficult to exit? Land Access?",
        vector:
          "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
        x: "725",
        y: "250",
        range: [-10, 10],
      }, //Hotshot Eddy
    ],
    lines: [
      {
        name: "Pick Your Poison",
        desc:
          "Explain the line. Where to start, reference points on the river, hazards to avoid, what to expect.",
        vector: "M 150,455q 300,58 500,-10Q 1000,340 1180,800",
        range: [-100, 100],
      }, //Pick Your Poison
    ],
    symbols: [
      {
        type: "Caution",
        desc:
          "There is no safe way to navigate this rapid at this water level.",
        top: "200",
        left: "200",
      }, // Caution
    ],
    arrows: [
      {
        name: "Nexterino Rapid",
        rotation: "160deg",
        bottom: "4vh",
        right: "5vw",
      }, //Nexterino Rapid
    ],
    mapLabel: {
      titleTop: "45vh",
      titleLeft: "11vw",
      pointerDirection: "bottom",
      pointerCoordinates: "35,47",
    },
  }, // "Bonk"
  //rapidEntryPoint
];
