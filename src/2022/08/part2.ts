// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

import {
  getHeightsUp,
  getHeightsLeft,
  getHeightsRight,
  getHeightsDown,
} from './part1';

const input = getInput('./src/2022/08/input.txt').map((row) =>
  row.split('').map(Number)
);

const calculate = (height: number, treeHeights: number[]) => {
  let score = 0;
  while (treeHeights.length) {
    score += 1;
    const nextTreeHeight = treeHeights.shift();
    if (nextTreeHeight >= height) return score;
  }
  return score;
};

const part2 = (data = input) => {
  let highScore = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const treeHeight = Number(data[i][j]);
      const up = calculate(treeHeight, getHeightsUp(data, i, j));
      const left = calculate(treeHeight, getHeightsLeft(data, i, j));
      const right = calculate(treeHeight, getHeightsRight(data, i, j));
      const down = calculate(treeHeight, getHeightsDown(data, i, j));
      const score = up * left * right * down;
      highScore = score > highScore ? score : highScore;
    }
  }
  return highScore;
};
// console.log('Part 2: ', time(part2));
// 11 ms

export default part2;
