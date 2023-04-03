// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/08/input.txt');

/*

    0:      1:      2:      3:      4:
   aaaa    ....    aaaa    aaaa    ....
  b    c  .    c  .    c  .    c  b    c
  b    c  .    c  .    c  .    c  b    c
   ....    ....    dddd    dddd    dddd
  e    f  .    f  e    .  .    f  .    f
  e    f  .    f  e    .  .    f  .    f
   gggg    ....    gggg    gggg    ....

    5:      6:      7:      8:      9:
   aaaa    aaaa    aaaa    aaaa    aaaa
  b    .  b    .  .    c  b    c  b    c
  b    .  b    .  .    c  b    c  b    c
   dddd    dddd    ....    dddd    dddd
  .    f  e    f  .    f  e    f  .    f
  .    f  e    f  .    f  e    f  .    f
   gggg    gggg    ....    gggg    gggg


  0 a, b, c, e, f, g          6
  1 c, f                      2 (unique length)
  2 a, c, d, e, g             5
  3 a, c, d, f, g             5
  4 b, c, d, f                4 (unique length)
  5 a, b, d, f, g             5
  6 a, b, d, e, f, g          6
  7 a, c, f                   3 (unique length)
  8 a, b, c, d, e, f, g       7 (unique length)
  9 a, b, c, d, f, g          6

*/

const part1 = () => {
  const uniqueLengths = [2, 3, 4, 7];

  return input
    .map((entry) => entry.split(' | ')[1])
    .join(' ')
    .split(' ')
    .filter(({ length }) => uniqueLengths.includes(length)).length;
};
// console.log('Part 1: ', time(part1));
// 0.15 ms

export default part1;
