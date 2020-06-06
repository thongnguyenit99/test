// function sum(x, y) {
//   return x + y;
// }

// function mul(x, y) {
//   return x * y;
// }

// const student = {
//   name: 'MAC',
//   mark: 9.3
// }

// const objToExport = {
//   student,
//   sum,
//   mul
// }

// module.exports = objToExport;

// module.exports = {
//   student,
//   sum,
//   mul
// };

module.exports = {
  student: {
    name: 'MAC',
    mark: 9.3
  },
  sum: (x, y) => x + y, // arrow function
  mul: (x, y) => x * y
};

// exports.student = {
//   name: 'MAC',
//   mark: 9.3
// }

// exports.sum = function (x, y) {
//   return x + y;
// }

// exports.mul = function (x, y) {
//   return x * y;
// }