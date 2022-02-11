const { Schema } = require('mongoose');
const connection = require('./connection');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, {
  collection: 'users',
});

userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

const User = connection.model('User', userSchema);

module.exports = User;
