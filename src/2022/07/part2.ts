// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2022/07/input.txt');

import { parse, weigh } from './part1';

const part2 = (data = [...input]) => {
  const structure = parse(data);
  const sizes = weigh([{ parents: [], node: Object.entries(structure)[0] }]);

  const usedSpace = sizes['/'];
  const unusedSpace = 70000000 - usedSpace;
  const spaceToFree = 30000000 - unusedSpace;

  return Object.values(sizes)
    .filter((size) => size >= spaceToFree)
    .sort()[0];
};
// console.log('Part 2: ', time(part2));
// 1.9ms

export default part2;
