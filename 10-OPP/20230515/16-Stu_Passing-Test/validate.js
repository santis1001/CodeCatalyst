class Validate {}

Validate.prototype.isPassword = (password) => {  
  // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;  
  // console.log(''+regex);
  // return regex.test(password);
  if (password.length < 8) {
    return false;
  }

  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "a" && char <= "z") {
      hasLowercase = true;
    } else if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    }

    if (hasUppercase && hasLowercase && hasNumber) {
      return true;
    }
  }

  return false;
};

module.exports = Validate;
