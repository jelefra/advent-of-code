// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/10/input.txt');

const removeValidChunks = (line) => {
  const regex = /\(\)|\[]|\{}|<>/;
  while (regex.test(line)) {
    line = line.replace(regex, '');
  }
  return line;
};

const hasClosingCharacter = (result) => /[)\]}>]/.test(result);

const findWrongClosingCharacter = (result) => result.match(/[)\]}>]/)[0];

const points = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const part1 = () =>
  input
    .reduce((acc, line) => {
      const remainder = removeValidChunks(line);
      if (hasClosingCharacter(remainder)) {
        acc.push(findWrongClosingCharacter(remainder));
      }
      return acc;
    }, [])
    .map((char) => points[char])
    .reduce((sum, points) => sum + points);
// console.log('Part 1: ', time(part1));
// 1.30 ms

export default part1;
