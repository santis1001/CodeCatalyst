const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'MyName',
            message: 'Enter Your Name:'
        },
        {
            type: 'input',
            name: 'location',
            message: 'Enter where do you reside:'
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your github profile url:'
        },
        {
        type: 'input',
        name: 'linkedIn',
        message: 'Enter your LinkedIn profile url:'
        }
    ])
    .then((answers) => {
    const html = `
    <!DOCTYPE html>
        <html>
            <head>
                <title>${answers.MyName}</title>
            </head>
            <body>
                <h2>Hi! My name is ${answers.MyName}</h2>
                <p>I'm live in ${answers.location}</p>
                <p>My Github page is: ${answers.github}</p>
                <p>My LinkedIn profile is: ${answers.linkedIn}</p>    
            </body>
        </html>
        `;
    fs.writeFile('index.html', html, (err) => {
      if (err) throw err;
      console.log('HTML file created!');
    });
  });