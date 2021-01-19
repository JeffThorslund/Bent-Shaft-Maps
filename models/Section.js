const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create River Schema
const SectionSchema = new Schema({
  name: {
    type: 'String',
    required: true,
  },
  sections: ['Mixed'],
});

const Section = mongoose.model('Section', SectionSchema);
module.exports = Section;
