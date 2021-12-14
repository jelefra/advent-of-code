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

const coordinatesDoNotExist = (x, y, map, basin, basins) =>
  !coordinatesInKnownBasins(x, y, map, basins) &&
  !coordinatesInBasin(x, y, map, basin);

const isWorthExploring = (x, y, map, basin, basins) =>
  Number(map[x][y]) < 9 && coordinatesDoNotExist(x, y, map, basin, basins);

const exploreCoordinates = (x, y, map, basin, basins) => {
  const newCoordinatesToExplore = [];
  [
    [x - 1, y],
    [x, y + 1],
    [x + 1, y],
    [x, y - 1],
  ].forEach(([x, y]) => {
    isWorthExploring(x, y, map, basin, basins) &&
      newCoordinatesToExplore.push({ x, y });
  });

  return newCoordinatesToExplore;
};

const determineBasin = (x, y, map, basins) => {
  const coordinatesToExplore = [{ x, y }];
  const basin = [];

  while (coordinatesToExplore.length) {
    const { x, y } = coordinatesToExplore.shift();
    if (map[x][y] !== '9' && !coordinatesInBasin(x, y, map, basin)) {
      const newCoordinatesToExplore = exploreCoordinates(
        x,
        y,
        map,
        basin,
        basins
      );
      coordinatesToExplore.push(...newCoordinatesToExplore);
      basin.push({ x, y });
    }
  }

  return basin;
};

const coordinatesInBasin = (x, y, grid, basin) =>
  !!basin.find((coordinates) => coordinates.x === x && coordinates.y === y);

const coordinatesInKnownBasins = (x, y, grid, basins) =>
  !!basins.find((basin) => coordinatesInBasin(x, y, grid, basin));

const part2 = () => {
  const basins = [];

  for (let i = 1; i < MAP.length - 1; i++) {
    for (let j = 1; j < MAP[i].length; j++) {
      if (!coordinatesInKnownBasins(i, j, MAP, basins)) {
        const basin = determineBasin(i, j, MAP, basins);
        basin.length && basins.push(basin);
      }
    }
  }

  const sortedBasins = basins.sort((a, b) => b.length - a.length);

  return sortedBasins
    .slice(0, 3)
    .map(({ length }) => length)
    .reduce((total, length) => total * length);
};
// console.log('Part 2: ', time(part2, 5));
// 227 ms

module.exports = { part2 };
