// console.log('hello nodejs');

// function sum(x, y) {
//   return x + y;
// }

// const x = 6;
// const y = 9;
// const s = sum(x, y);
// console.log(`${x} + ${y} = ${s}`); // string interpolation, es6 // es2015

const MD5 = require('md5.js')
const fn = require('./fn');

console.log(fn.student);

const x = 6, y = 9;

const s = fn.sum(x, y);
console.log(`${x} + ${y} = ${s}`);

const m = fn.mul(x, y);
console.log(`${x} * ${y} = ${m}`);

const raw = '42';
const hash = new MD5().update(raw).digest('hex');
console.log(hash);