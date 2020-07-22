const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 300,
    min: 6,
  },
  email: {
    type: String,
    required: false,
    max: 300,
    min: 6,
  },
});
