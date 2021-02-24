// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");
const firstName = getInput (0); 
const lastName = getInput (1);
const fullName = firstName + " " + lastName;
console.log ('hello. ' + " " + firstName + " " + lastName);
console.log ("your name in capital letters is: "  + fullName.toUpperCase ());
console.log ( "your Initials are: "  + fullName[0] + '.' + fullName[fullName.indexOf(' ') + 1] + '.');
console.log (firstName + lastName + "@codeimmersives.com");