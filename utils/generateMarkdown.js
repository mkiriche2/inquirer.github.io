
var inquirer = require('inquirer');
var fs = require('fs');


function generateMarkdown(data) {
  inquirer.prompt([

    {
      type:'list',
      name: 'badge',
      choices: ['MIT','Creative Commons'] 
   },
    {
       type:'input',
       name: 'second',
       message: 'What is your project called ?' 
    },
    {
        type:'input',
        name: 'third',
        message: 'Please give a brief Description!' 
     },
     {
      type: 'input',
      name: 'table of contents',
      message: 'Please press enter for table of contents',
    },
    {
      type: 'input',
      name: 'fourth',
      message: 'Usage',
    },
    
    {
      type: 'input',
      name: 'fifth',
      message: 'Installation',
    },
    {
      type: 'input',
      name: 'sixth',
      message: 'Liscense',
    },
    {
      type: 'input',
      name: 'seventh',
      message: 'Contributing',
    },
    {
      type: 'input',
      name: 'eigth',
      message: 'Tests',
    },
    {
      type: 'input',
      name: 'ninth',
      message: 'Questions',
    },

  ])
  .then(function(answers)  {
    var badgeUrl = ''
    if(answers.badges === 'MIT') {
      badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else  if (answers.badges === 'Creative Commons') {
      badgeUrl = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    }
; 
      const readMeString = `
${badgeUrl}
# Title ${answers.second}
# Description ${answers.third}
# table of contents 
Title ${answers.second}
Desciption ${answers.third}
Usage ${answers.fourth}
Installation ${answers.fifth}
License ${answers.sixth}
Contributing ${answers.seventh}
Tests ${answers.eigth}
Questions${answers.ninth}
# Usage ${answers.fourth}
# Installation ${answers.fifth}
# License ${answers.sixth}
# Contributing ${answers.seventh}
# Tests ${answers.eigth}
# Questions ${answers.ninth}

 
      `
      fs.writeFile('readMe.md',readMeString , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  })
  return `
# ${data}

`;
}

  module.exports = {
    generateMarkdown
  };