// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/07/input.txt')[0].split(',').map(Number);

const findLowestFuelConsumption = (fuelConsumption = (value) => value) => {
  const range = [...Array(Math.max(...input) + 1).keys()].slice(
    Math.min(...input)
  );

  const fuelConsumptions = range.map((value) =>
    input.reduce(
      (sum, position) => (sum += fuelConsumption(Math.abs(value - position))),
      0
    )
  );

  return Math.min(...fuelConsumptions);
};

const arithmeticSum = (n) => (n * (n + 1)) / 2;

const part2 = () => findLowestFuelConsumption(arithmeticSum);
// console.log('Part 2: ', time(part2, 50));
// 317 ms

module.exports = { part2 };
