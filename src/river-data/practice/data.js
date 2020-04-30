import DefaultRapid from "./basemaps/DefaultRapid";
import Welcome from "./basemaps/Welcome";
import OverviewMap from "./basemaps/OverviewMap";
import TemplateRapid from "./basemaps/TemplateRapid";
import WoofRapid from "./basemaps/WoofRapid.js"; import BoomRapid from "./basemaps/BoomRapid.js"; import EasyRapid from "./basemaps/EasyRapid.js"; //importEntryPoint

export const global = {
  riverName: "Practice",
  riverDesc:
    "Add a description of your river! In this section, include some general information about the river. History? Paddling Style? Yearly events held here?",
  riverInfo:
    "Add information about put in location, take out location. Any fees or private property complications? Specific season that the river is runnable?",
  putInCoords: "45.747890, -76.792082",
  riverMap: {
    viewBox: "0 0 1600 900",
    path: Welcome,
  },
  overviewMap: OverviewMap,
};

export const data = [
  {
    name: "Default Rapid",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: DefaultRapid,
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
  }, // "Default Rapid"
  {
    name: "Woof",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: WoofRapid,
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
  }, // "Woof"
  {
    name: "Boom",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: BoomRapid,
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
  }, // "Boom"
  {
    name: "Easy",
    desc: "Class III",
    displayPosition: {
      top: "70vh",
      left: "22vw",
      width: "35vw",
    },
    riverMap: {
      viewBox: "0 0 1600 900",
      path: EasyRapid,
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
  }, // "Easy"
  //rapidEntryPoint
];
