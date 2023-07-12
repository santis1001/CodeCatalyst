const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
// TODO: Create a getter for the virtual that returns the full name of the user (first + last)
// Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`
userSchema
  .virtual('fullName')
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (value) {
    this.first = value.split(' ')[0];
    this.last = value.split(' ')[1];
    this.set({first, last});
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
