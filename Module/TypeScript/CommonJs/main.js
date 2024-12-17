// tsc add.ts main.ts
// node main.js
var addFunc = require('./add').add;
var result = addFunc(1, 2);
console.log(result);
