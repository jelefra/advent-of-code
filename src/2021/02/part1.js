// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/02/input.txt');

const part1 = () => {
  const instructions = input.reduce(
    (instructions, instruction) => {
      const [direction, valueAsString] = instruction.split(' ');
      const value = Number(valueAsString);

      switch (direction) {
        case 'forward':
          instructions.horizontal += value;
          break;
        case 'up':
          instructions.depth -= value;
          break;
        case 'down':
          instructions.depth += value;
          break;
      }
      return instructions;
    },
    { horizontal: 0, depth: 0 }
  );

  return instructions.horizontal * instructions.depth;
};
// console.log('Part 1: ', time(part1));
// 0.48 ms

module.exports = { part1 };
