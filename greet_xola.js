"use strict";
const chalk = require('chalk');
const figlet = require('figlet');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));

console.log(figlet.textSync("Hello, Xola", {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

console.log(styledMessage);

