// TODO: Import the Validate class.
const Validate = require('../validate.js');

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () =>{
    describe('invalid',()=>{
        it('should return flase for empty password',()=>{
            const str = '';

            const result = new Validate().isPassword(str);
            expect(result).toEqual(false);
        });
    });
    
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
