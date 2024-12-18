"use strict";
// tsc add.ts main.ts
// node main.js
Object.defineProperty(exports, "__esModule", { value: true });
var add_1 = require("./add");
var sub_1 = require("./sub");
var result = (0, add_1.add)(1, 2);
console.log(result);
var result2 = (0, sub_1.sub)(1, 2);
var result3 = (0, sub_1.subV2)(1, 2);
console.log(result2);
console.log(result3);
console.log(sub_1.author);
