// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2023/01/input.txt');

const isDigitCharCode = (x: string) =>
  x.charCodeAt(0) > 47 && x.charCodeAt(0) < 58;

const part1 = (data = input) => {
  return data.reduce((total, row) => {
    const chars = row.split('');
    const first = chars.find(isDigitCharCode);
    const last = chars.reverse().find(isDigitCharCode);
    return total + Number(`${first}${last}`);
  }, 0);
};
// console.log('Part 1: ', time(part1));
// 0.6 ms

export default part1;
