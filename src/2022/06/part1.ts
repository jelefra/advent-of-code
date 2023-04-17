// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2022/06/input.txt')[0];

const charactersAreUnique = (characters: []) =>
  characters.length === Array.from(new Set(characters)).length;

const part1 = (buffer = input) => {
  for (let i = 3; i < buffer.length; i++) {
    if (charactersAreUnique(buffer.slice(i - 3, i + 1))) {
      return i + 1;
    }
  }
};
// console.log('Part 1: ', time(part1));
// 1.2 ms

export default part1;
