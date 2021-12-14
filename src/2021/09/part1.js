// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/09/input.txt');

const boxInput = (input) => {
  const map = [...input];
  const columnsCount = map[0].length;
  const newRow = String(new Array(columnsCount).fill(9).join(''));
  map.unshift(newRow);
  map.push(newRow);
  for (let y = 0; y < map.length; y++) {
    map[y] = '9' + map[y] + '9';
  }
  return map;
};

const MAP = boxInput(input);

const part1 = () => {
  const lowPoints = [];
  for (let x = 1; x < MAP.length; x++) {
    for (let y = 1; y < MAP[x].length; y++) {
      // Assertions still valid without type conversion
      const height = Number(MAP[x][y]);
      if (
        height < Number(MAP[x - 1][y]) &&
        height < Number(MAP[x][y + 1]) &&
        height < Number(MAP[x + 1][y]) &&
        height < Number(MAP[x][y - 1])
      ) {
        lowPoints.push(height);
      }
    }
  }

  return lowPoints
    .map((lowPoint) => lowPoint + 1)
    .reduce((sum, lowPoint) => sum + lowPoint);
};
// console.log('Part 1: ', time(part1));
// 4.95 ms

module.exports = { part1 };
