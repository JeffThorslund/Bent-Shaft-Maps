const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventSchema = new Schema({});

const Event = mongoose.model('Event', EventSchema);

exports.Event = Event;
