// tsc add.ts main.ts
// node main.js
const { add: addFunc } = require('./add');
const result: number = addFunc(1, 2);
console.log(result);