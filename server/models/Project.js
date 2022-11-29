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
  inProgress: {
    type: Boolean
  },
  owner: {

  },
  developer: {

  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
