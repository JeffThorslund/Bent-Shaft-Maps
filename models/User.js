const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 300,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 300,
    min: 6,
  },
  userID: {
    type: String,
    required: false,
    max: 300,
    min: 6,
  },
  password: {
    type: String,
    required: false,
    max: 300,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('User', userSchema);
