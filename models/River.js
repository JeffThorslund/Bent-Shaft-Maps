const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { config } = require("../client/src/config");

//River Schema
const RiverSchema = new Schema({});

//River
exports.River = River = mongoose.model("River", RiverSchema);
