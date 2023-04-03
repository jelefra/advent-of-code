// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/07/input.txt')[0].split(',').map(Number);

const part1 = () => {
  const range = [...Array(Math.max(...input) + 1).keys()].slice(
    Math.min(...input)
  );

  const fuelConsumptions = range.map((value) =>
    input.reduce((sum, position) => (sum += Math.abs(value - position)), 0)
  );

  return Math.min(...fuelConsumptions);
};
// console.log('Part 1: ', time(part1, 50));
// 308 ms

export default part1;
