import {
  data as ottawaRiverData,
  global as ottawaRiverGlobal,
} from "../river-data/ottawa-river/OttawaRiverData";
import {
  data as jeffyTData,
  global as jeffyTGlobal,
} from "../river-data/jeffy-t/jeffyT"; //importEntryPoint

const RiverList = [
  {
    name: "Ottawa River",
    location: "Beachburg, Ontario",
    class: "III",
    underConst: false,
    data: ottawaRiverData,
    global: ottawaRiverGlobal,
  },
  {
    name: "Gatineau River",
    location: "Low, Quebec",
    class: "III",
    underConst: true,
    data: null,
    global: null,
  },
  {
    name: "Nantahala River",
    location: "Bryson City, North Carolina",
    class: "II",
    underConst: true,
    data: null,
    global: null,
  },
  {
  name: "JeffyT",
  location: "undefined",
  class: "II",
  underConst: false,
  data: jeffyTData,
  global: jeffyTGlobal,
}, //elementEntryPoint
];
export default RiverList;
