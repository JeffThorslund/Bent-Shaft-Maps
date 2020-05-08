import {
  data as ottawaRiverData,
  global as ottawaRiverGlobal,
} from "../river-data/ottawa-river/data.js";
//importEntryPoint

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
]; //
export default RiverList;
