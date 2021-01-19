const mongoose = require('mongoose');

const { Schema } = mongoose;

const RiverSchema = new Schema({});

const River = mongoose.model('River', RiverSchema);

exports.River = River;
