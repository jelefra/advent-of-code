// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2022/08/input.txt').map((row) =>
  row.split('').map(Number)
);

export const getHeightsLeft = (grid, row, column): number[] =>
  grid[row].slice(0, column).reverse();

export const getHeightsRight = (grid, row, column): number[] =>
  grid[row].slice(column + 1);

export const getHeightsUp = (grid, row, column): number[] => {
  const heights = [];
  for (let i = 0; i < row; i++) {
    heights.push(grid[i][column]);
  }
  return heights.reverse();
};

export const getHeightsDown = (grid, row, column): number[] => {
  const heights = [];
  for (let i = row + 1; i < grid.length; i++) {
    heights.push(grid[i][column]);
  }
  return heights;
};

const part1 = (data = input) => {
  const edgeTrees = (data.length + data[0].length) * 2 - 4;
  let otherVisibleTrees = 0;
  for (let i = 1; i < data.length - 1; i++) {
    for (let j = 1; j < data[i].length - 1; j++) {
      const treeHeight = Number(data[i][j]);
      if (
        treeHeight > Math.max(...getHeightsUp(data, i, j)) ||
        treeHeight > Math.max(...getHeightsLeft(data, i, j)) ||
        treeHeight > Math.max(...getHeightsRight(data, i, j)) ||
        treeHeight > Math.max(...getHeightsDown(data, i, j))
      ) {
        otherVisibleTrees += 1;
      }
    }
  }
  return edgeTrees + otherVisibleTrees;
};
// console.log('Part 1: ', time(part1, 250));
// 50 ms

export default part1;
