// tsc add.ts main.ts
// node main.js

import { add } from './add';
import { author, sub, subV2 } from './sub';

const result: number = add(1, 2);
console.log(result);

const result2: number = sub(1, 2);
const result3: number = subV2(1, 2);
console.log(result2);
console.log(result3);
console.log(author);
