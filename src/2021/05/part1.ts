// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

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

const countOverlappingLines = () => {
  // Idem as part 1
  const { x, y } = getFieldSize(input);
  const field = representField(x, y);

  // Fill the diagram
  for (const line of input) {
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
  }

  return field.flat().filter((value) => value > 1).length;
};

const part1 = () => countOverlappingLines();
// console.log('Part 1: ', time(part1, 50));

export default part1;
