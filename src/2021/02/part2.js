// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/02/input.txt');

const part2 = () => {
  const instructions = input.reduce(
    (instructions, instruction) => {
      const [direction, valueAsString] = instruction.split(' ');
      const value = Number(valueAsString);

      switch (direction) {
        case 'forward':
          instructions.horizontal += value;
          instructions.depth += instructions.aim * value;
          break;
        case 'up':
          instructions.aim -= value;
          break;
        case 'down':
          instructions.aim += value;
          break;
      }
      return instructions;
    },
    { horizontal: 0, depth: 0, aim: 0 }
  );

  return instructions.horizontal * instructions.depth;
};
// console.log('Part 2: ', time(part2));
// 0.48 ms

module.exports = { part2 };
