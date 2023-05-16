const Validate = require('../validate.js');

describe('Validate', () => {
  describe('Password',()=>{

    it('returns false given password length is less than 8',()=>{
        const result = new Validate().isPassword("Pass");
        expect(result).toEqual(false);
    });
    it('returns false given password does not contain at least one capital letter',()=>{
      const result = new Validate().isPassword("password123");
      expect(result).toEqual(false);
    });
    it('returns false given password does not contain at least one lowercase letter',()=>{
      const result = new Validate().isPassword("PASSWORD123");
      expect(result).toEqual(false);
    });
    it('returns false given password does not contain at least one number',()=>{
      const result = new Validate().isPassword("Password");
      expect(result).toEqual(false);
    });
    it('returns true given password is a valid password.',()=>{
      const result = new Validate().isPassword("Password123");
      expect(result).toEqual(true);
    });
  });
}); 
