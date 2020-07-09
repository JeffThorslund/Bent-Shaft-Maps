const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create River Schema
const RiverSchema = new Schema({
  name: {
    type: "String",
    required: true
  },
  id: {
    type: "String",
    required: true
  },
  desc: {
    type: "String",
    required: true
  },
  info: {
    type: "String",
    required: true
  },
  location: {
    type: "String",
    required: true
  },
  class: {
    type: "String",
    required: true
  },
  putIn: {
    type: "String",
    required: true
  },
  takeOut: {
    type: "String",
    required: true
  },
  level: {
    defaultLevel: {
      type: "Number",
      required: true
    },
    levelUnits: {
      type: "String",
      required: true
    },
    levelMin: {
      type: "Number",
      required: true
    },
    levelMax: {
      type: "Number",
      required: true
    },
  },
  sponsors: {
    type: ["Mixed"],
  },
  contributors: {
    type: ["String"],
  },
  rapids: {
    type: ["Mixed"],
  },
});

const AnySchema = new Schema({ name: {} });


module.exports = Any = mongoose.model("River", AnySchema);
