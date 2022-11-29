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
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  developer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
