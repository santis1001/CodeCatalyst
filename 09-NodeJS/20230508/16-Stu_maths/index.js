// TODO: Import `maths.js`

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

const cms = require('./maths');

const a = process.argv[3];
const b = process.argv[4];

const key = process.argv[2];

switch (key) {
    case 'sum':    
        console.log(cms.sum(a,b));
        break;
    case 'dif':
        console.log(cms.difference(a,b));
        break;
    case 'pro':
        console.log(cms.product(a,b));
        break;
    case 'quo':
        console.log(cms.quotient(a,b));
        break;
    default:
        console.log('Error');
        break;
}