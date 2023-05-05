(function () {

    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('Enter your input: ', (input) => {
    console.log(`You entered: ${input}`);
    rl.close();
    });
})();