//var generateName = require('sillyname');
import superheroes from "superheroes";
import generateName from "sillyname";

var sillyName = generateName();
var superhero = superheroes.random()

console.log(`My name is ${sillyName}`)
console.log(`Although you might know me as ${sillyName}, I  am secretly ${superhero}`)