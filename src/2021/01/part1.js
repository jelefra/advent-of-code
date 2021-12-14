// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/01/input.txt').map(Number);

const part1 = () => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < input[i + 1]) {
      count++;
    }
  }
  return count;
};
// console.log('Part 1: ', time(part1));
// 0.01 ms

module.exports = { part1 };
