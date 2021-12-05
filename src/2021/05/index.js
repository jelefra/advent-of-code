// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/05/input.txt');

const representField = (x, y) =>
  Array(y + 1)
    .fill(0)
    .map(() => Array(x + 1).fill(0));

const parseEntry = (entry) =>
  entry
    .split(' -> ')
    .flatMap((elem) => elem.split(','))
    .map(Number);

const getFieldSize = (input) =>
  input.reduce(
    (size, entry) => {
      const [x1, y1, x2, y2] = parseEntry(entry);
      if (Math.max(x1, x2) > size.x) {
        size.x = Math.max(x1, x2);
      }
      if (Math.max(y1, y2) > size.y) {
        size.y = Math.max(y1, y2);
      }
      return size;
    },
    { x: 0, y: 0 }
  );

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const getOperation = (a, b) => (a < b ? add : subtract);

const incrementDiagonal = (field, x1, x2, y1, y2) => {
  const length = Math.abs(x1 - x2);
  const yFunction = getOperation(y1, y2);
  const xFunction = getOperation(x1, x2);
  for (let i = 0; i <= length; i++) {
    field[yFunction(y1, i)][xFunction(x1, i)]++;
  }
};

const countOverlappingLines = ({ includeDiagonals }) => {
  // Idem as part 1
  const { x, y } = getFieldSize(input);
  const field = representField(x, y);

  // Fill the diagram
  for (let line of input) {
    const [x1, y1, x2, y2] = parseEntry(line);

    // Horizontal line
    if (y1 === y2) {
      // Increment elements in the row
      for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
        field[y1][i]++;
      }
    }

    // Vertical line
    else if (x1 === x2) {
      // Increment one element per row
      for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
        field[i][x1]++;
      }
    }

    // Diagonal line
    else if (includeDiagonals && Math.abs(x2 - x1) === Math.abs(y2 - y1)) {
      incrementDiagonal(field, x1, x2, y1, y2);
    }
  }

  return field.flat().filter((value) => value > 1).length;
};

const part1 = () => countOverlappingLines({ includeDiagonals: false });
// console.log('Part 1: ', time(part1, 50));
// 169 ms

const part2 = () => countOverlappingLines({ includeDiagonals: true });
// console.log('Part 2: ', time(part2, 50));
// 170 ms

module.exports = { part1, part2 };
