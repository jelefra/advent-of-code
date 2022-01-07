// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/15/input.txt');

const shortestPath = (map) => {
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

const part2 = (data = input) => {
  const map = data.map((row) => row.split('').map(Number));
  const expandedMap = [...Array(map.length * 5)].map((_, y) =>
    [...Array(map[0].length * 5)].map(
      (_, x) =>
        1 +
        ((map[y % map.length][x % map[0].length] -
          1 +
          Math.trunc(x / map[0].length) +
          Math.trunc(y / map.length)) %
          9)
    )
  );
  return shortestPath(expandedMap);
};
// console.log('Part 2: ', time(part2, 10));
// 3,457 ms

module.exports = { part2 };
