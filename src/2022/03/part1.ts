// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input: string[] = getInput('./src/2022/03/input.txt');

const findCommon = (a: string, b: string) =>
  a.split('').find((itemType) => b.includes(itemType));

const getPriority = (common) =>
  common.charCodeAt(0) -
  (common.charCodeAt(0) >= 97
    ? 96 // 'a'.charCodeAt(0) === 97
    : 38); // 'A'.charCodeAt(0) === 65, 65 - 27 = 38

const part1 = (data = input) =>
  data
    .map((rucksackContent) => {
      const midPoint = rucksackContent.length / 2;
      const compartment1 = rucksackContent.slice(0, midPoint);
      const compartment2 = rucksackContent.slice(midPoint);
      return getPriority(findCommon(compartment1, compartment2));
    })
    .reduce((total, current) => total + current, 0);

// console.log('Part 1: ', time(part1));
// 0.13 ms

export default part1;
