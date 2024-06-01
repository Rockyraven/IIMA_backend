// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  mobile: {
    type: String,
  },
  message: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        // Regular expression to validate email format
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  }
  
}, {
  timestamps: true // Add timestamps automatically
});

module.exports = mongoose.model('User', userSchema);