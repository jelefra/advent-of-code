// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/15/input.txt');

const part1 = (data = input) => {
  const map = data.map((row) => row.split('').map(Number));
  const queue = [{ position: [0, 0], cost: 0 }];
  const adjacent = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const visited = new Set();

  while (queue.length) {
    const {
      position: [x, y],
      cost,
    } = queue.shift();
    if (y === map.length - 1 && x === map[0].length - 1) {
      return cost;
    }
    adjacent
      .map(([dx, dy]) => [dx + x, dy + y])
      .filter(([x, y]) => map[y] && map[y][x])
      .filter((position) => !visited.has(String(position)))
      .forEach((position) => {
        visited.add(String(position));
        queue.push({ position, cost: cost + map[position[1]][position[0]] });
      });
    queue.sort((a, b) => a.cost - b.cost);
  }
};
// console.log('Part 1: ', time(part1, 100));
// 58 ms

export default part1;
