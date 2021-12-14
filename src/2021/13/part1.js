// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/13/input.txt', '\n\n');

const merge = (gridA, gridB) => {
  const rowLength = gridB[0].length;
  for (let y = 0; y < gridA.length; y++) {
    for (let x = 0; x < rowLength; x++) {
      if (gridB[y][x] === '#') {
        gridA[y][x] = '#';
      }
    }
  }
  return gridA;
};

const ensureOddColumns = (grid, foldLocation) =>
  grid.map((row) =>
    foldLocation === grid[0].length / 2 ? row.push('.') : row.unshift('.')
  );

const foldX = (grid, foldLocation) => {
  if (grid[0].length % 2 === 0) {
    grid = ensureOddColumns(grid, foldLocation);
  }

  return merge(
    grid.map((row) => row.slice(0, foldLocation)),
    grid.map((row) => row.slice(foldLocation).reverse())
  );
};

const ensureOddRows = (grid, foldLocation) => {
  const dummyRow = new Array(grid[0].length).fill('.');
  if (foldLocation === grid.length / 2) {
    grid.push(dummyRow);
  } else {
    grid.unshift(dummyRow);
  }
  return grid;
};

const foldY = (grid, foldLocation) => {
  if (grid.length % 2 === 0) {
    grid = ensureOddRows(grid, foldLocation);
  }

  return merge(grid.slice(0, foldLocation), grid.slice(foldLocation).reverse());
};

const fold = (grid, instruction) => {
  const foldLocation = Number(instruction.split('=')[1]);

  return instruction.includes('fold along y=')
    ? foldY(grid, foldLocation)
    : foldX(grid, foldLocation);
};

const representPaper = (x, y) =>
  Array(y + 1)
    .fill(0)
    .map(() => Array(x + 1).fill('.'));

const getPaperSize = (dots) =>
  dots.reduce(
    (size, entry) => {
      const [x, y] = entry;
      if (x > size.x) {
        size.x = x;
      }
      if (y > size.y) {
        size.y = y;
      }
      return size;
    },
    { x: 0, y: 0 }
  );

const part1 = (paper = input) => {
  const dots = paper[0]
    .split('\n')
    .map((xy) => xy.split(',').map((coordinate) => Number(coordinate)));
  const instructions = paper[1].split('\n');
  const { x, y } = getPaperSize(dots);
  let grid = representPaper(x, y);

  for (let dot of dots) {
    const [x, y] = dot;
    grid[y][x] = '#';
  }

  return fold(grid, instructions[0])
    .flat()
    .filter((position) => position === '#').length;
};
// console.log('Part 1: ', time(part1, 50));
// 144 ms

module.exports = { part1 };
