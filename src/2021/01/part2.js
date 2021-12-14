// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/01/input.txt').map(Number);

const part2 = () => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const sum1 = input[i] + input[i + 1] + input[i + 2];
    const sum2 = input[i + 1] + input[i + 2] + input[i + 3];
    if (sum1 < sum2) {
      count++;
    }
  }

  return count;
};
// console.log('Part 2: ', time(part2));
// 0.01 ms

module.exports = { part2 };
