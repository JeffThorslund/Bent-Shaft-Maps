const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Rapid Schema
const RapidSchema = new Schema({
name: String,
id: String,
desc: [
  {
    text: String,
    range: [Number]
  }
],
riverMap: String,
hydraulics: Array,
eddys: Array,
lines: Array,
symbols: Array,
arrows: Array,
mapLabel: [[Number], [Number]]
})

//Section Schema
const SectionSchema = new Schema({
  name: String,
  id: String,
  desc: String,
  overViewMap: String,
  access: String,
  location: String,
  class: String,
  putIn: String,
  takeOut: String,
  sponsors: [
    {
      logo: String,
      link: String,
    },
  ],
  contributors: [String],
  level: {
    defaultLevel: Number,
    levelUnits: String,
    levelRange: [Number],
  },
  rapids: [RapidSchema]
});

//River Schema
const RiverSchema = new Schema({
  name: String,
  sections: [SectionSchema],
});

//River
exports.River = River = mongoose.model("River", RiverSchema);
