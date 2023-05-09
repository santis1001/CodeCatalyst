const inq = require('inquirer');

inq
.createPromptModule(
    [
        {
            type: 'input',
            message: 'What is your name?',
            name:'username'
        },
        {
            type: 'checkbox',
            message: 'languagues?',
            name:'stack',
            choice:['HTML','CSS','JS','MySQL']
        },
        {
            type: 'list',
            message: 'preferred comunication?',
            name:'contact',
            choice:['HTML','CSS','JS','MySQL']
        }
    ]
).then((response) => response.confirm === response.password
    ? console.log('succes')
    : console.log('error')
);