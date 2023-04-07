// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input: string[] = getInput('./src/2022/03/input.txt');

const groupByN = (array: string[], n = 3) => {
  const output = [];
  for (let i = 0; i < array.length; i += n) {
    output.push(array.slice(i, i + n));
  }
  return output;
};

const getPriority = (common) =>
  common.charCodeAt(0) -
  (common.charCodeAt(0) >= 97
    ? 96 // 'a'.charCodeAt(0) === 97
    : 38); // 'A'.charCodeAt(0) === 65, 65 - 27 = 38

const findCommon = (a: string, b: string, c: string) =>
  a.split('').find((itemType) => b.includes(itemType) && c.includes(itemType));

const part2 = (data = input) =>
  groupByN(data)
    .map(([a, b, c]) => getPriority(findCommon(a, b, c)))
    .reduce((total, current) => total + current, 0);

// console.log('Part 2: ', time(part2));
// 0.11 ms

export default part2;
