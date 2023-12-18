// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2023/03/input.txt');

export type Position = { row: number; col: number };
export type Char = Position & { value: string };

const getNumPositions = (numStr: string, { row, col }: Position): Position[] =>
  numStr.split('').map((_, index) => ({
    row,
    col: col + index,
  }));

const hasPartNumber = ({ value, row, col }: Char, grid: string[][]) => {
  const numPositions = getNumPositions(value, { row, col });
  return numPositions.some(({ row, col }) =>
    [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1], // May be known to be a number
      [0, 1], // Idem
      [1, -1],
      [1, 0],
      [1, 1],
    ].some(([x, y]) => {
      const value = grid[row + x][col + y];
      return value !== '.' && isNaN(Number(value));
    })
  );
};

export const getChars = (data: string[], regex: RegExp): Char[] =>
  data.reduce((numbers: Char[], row, rowIndex) => {
    let match;
    while ((match = regex.exec(row)) !== null) {
      numbers.push({
        value: match[0],
        // Account for padding given we work off `data` not `grid`
        row: rowIndex + 1,
        col: match.index + 1,
      });
    }
    return numbers;
  }, []);

export const makeGrid = (data) => {
  const extraRow = '.'.repeat(data[0].length);
  return [extraRow, ...data, extraRow].map((row) => `.${row}.`.split(''));
};

const part1 = (data = input) => {
  const grid = makeGrid(data);
  const numbers = getChars(data, /\d+/g);
  return numbers.reduce((sum, number) => {
    sum += hasPartNumber(number, grid) ? Number(number.value) : 0;
    return sum;
  }, 0);
};
// console.log('Part 1: ', time(part1));
// 4.9 ms

export default part1;
