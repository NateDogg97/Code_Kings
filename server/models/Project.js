const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    default: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  developers: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
