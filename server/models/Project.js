const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  open: {
    type: Boolean
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
