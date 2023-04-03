// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

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

export default part1;
