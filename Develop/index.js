const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking to page where the README is developed 
const generatePage = require('./utils/generateMarkdown.js');

const questions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Github username');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter a valid email address');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your app name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter the app name');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your app.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter a description');
                return false; 
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your app have?',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Choose a license');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter the steps required to install your app');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use this app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a usage instruction');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command do you use to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors?'
    }
]);
};
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README has been created')
        }
    })
}; 
questions()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})
