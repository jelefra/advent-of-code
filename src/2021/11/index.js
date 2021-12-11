// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/11/input.txt');

const processNeighbours = (
  octopus,
  map,
  haveFlashed,
  incrementNeighboursOfTheseOctopuses
) => {
  const [x, y] = octopus;
  [
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
  ].forEach((neighbour) =>
    process(neighbour, map, haveFlashed, incrementNeighboursOfTheseOctopuses)
  );
};

const hasFlashed = (octopus, haveFlashed) =>
  !!haveFlashed.find(([x, y]) => x === octopus[0] && y === octopus[1]);

const process = ([x, y], map, haveFlashed, backlog) => {
  const value = map[y][x];
  if (!(value === '.') && !hasFlashed([x, y], haveFlashed)) {
    if (value === 9) {
      map[y][x] = 0;
      haveFlashed.push([x, y]);
      backlog.push([x, y]);
    } else {
      map[y][x]++;
    }
  }
};

const step = (map) => {
  const haveFlashed = [];
  const backlog = [];

  // y = vertical position
  for (let y = 0; y < map.length; y++) {
    // x = horizontal position
    for (let x = 0; x < map[y].length; x++) {
      process([x, y], map, haveFlashed, backlog);
    }
  }

  while (backlog.length) {
    const octopus = backlog.shift();
    processNeighbours(octopus, map, haveFlashed, backlog);
  }

  return haveFlashed.length;
};

const boxInput = (input) => {
  const map = [...input];
  const columnsCount = map[0].length;
  const newRow = new Array(columnsCount).fill('.').join('');
  map.unshift(newRow);
  map.push(newRow);
  for (let y = 0; y < map.length; y++) {
    map[y] = '.' + map[y] + '.';
  }
  return map;
};

const formatInput = (input) =>
  boxInput(input)
    .map((line) => line.split(''))
    .map((row) => row.map((elem) => Number(elem) || '.'));

const part1 = () => {
  const map = formatInput(input);
  const steps = 100;

  let sum = 0;
  for (let i = 0; i < steps; i++) {
    sum += step(map);
  }
  return sum;
};
// console.log('Part 1: ', time(part1));
// 2.0 ms

const part2 = () => {
  const map = formatInput(input);

  let counter = 0;
  do {
    counter++;
  } while (step(map) < 100);

  return counter;
};
// console.log('Part 2: ', time(part2));
// 6.59 ms

module.exports = { part1, part2 };
