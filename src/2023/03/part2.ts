// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

import { getChars, makeGrid } from './part1';
import type { Position, Char } from './part1';

const input = getInput('./src/2023/03/input.txt');

const getPartNumber = (row: string[], index: number): number => {
  let startIndex = index;
  let endIndex = index;
  while (startIndex >= 0 && /\d/.test(row[startIndex])) startIndex--;
  while (endIndex < row.length && /\d/.test(row[endIndex])) endIndex++;
  return Number(row.slice(++startIndex, endIndex).join(''));
};

const calcGearRatio = ([adjacent1, adjacent2]: [Char, Char], grid): number => {
  const n1 = getPartNumber(grid[adjacent1.row], adjacent1.col);
  const n2 = getPartNumber(grid[adjacent2.row], adjacent2.col);
  return n1 * n2;
};

const getAdjacentNum = (grid, { row, col }: Position) =>
  [
    { x: -1, y: -1, n: 3 },
    { x: 0, y: -1, n: 1 },
    { x: 0, y: +1, n: 1 },
    { x: 1, y: -1, n: 3 },
  ].reduce((acc: Char[], { x, y, n }) => {
    const values = grid[row + x].slice(col + y, col + y + n).join('');
    const regex = /\d+/g;
    let match;
    while ((match = regex.exec(values)) !== null) {
      acc.push({
        value: match[0],
        row: row + x,
        col: col + y + match.index,
      });
    }
    return acc;
  }, []);

const part2 = (data = input) => {
  const grid = makeGrid(data);
  const asterisks = getChars(data, /\*/g);
  return asterisks.reduce((sum, asterisk) => {
    const adjacentNum = getAdjacentNum(grid, asterisk);
    sum +=
      adjacentNum.length === 2
        ? calcGearRatio(adjacentNum as [Char, Char], grid)
        : 0;
    return sum;
  }, 0);
};
// console.log('Part 2: ', time(part2));
// 0.8 ms

export default part2;
