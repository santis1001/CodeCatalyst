// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.
class Validate {}

// TODO: Export the Validate class from this file.
Validate.prototype.isPassword = (a) =>{
    return !a==="";
};
module.exports = Validate;