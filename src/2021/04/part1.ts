// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/04/input.txt', '\n\n');

const drawSet = input[0].split(',');
const boards = input.slice(1);

const findLineWinningDrawIndex = (line) =>
  Math.max(...line.map((number) => drawSet.indexOf(number)));

const initialiseArrayOfEmptyArrays = (size) =>
  Array(size)
    .fill(0)
    .map(() => []);

const getVerticalLines = (horizontalLines) =>
  horizontalLines.reduce((verticalLines, line) => {
    line.forEach((value, index) => {
      verticalLines[index].push(value);
    });
    return verticalLines;
  }, initialiseArrayOfEmptyArrays(horizontalLines[0].length));

const getHorizontalLines = (board) =>
  board
    .split('\n')
    // Filter to account for double spaces
    // Distinguish from earlier `split` for clarity, at the cost of performance
    .map((line) => line.split(' ').filter(Boolean))
    .filter((line) => line.length);

const getBoardLines = (board) => {
  const horizontalLines = getHorizontalLines(board);
  const verticalLines = getVerticalLines(horizontalLines);

  return [...horizontalLines, ...verticalLines];
};

const findBoardWinningDrawIndex = (board) => {
  const lines = getBoardLines(board);
  // Assume board will be solved with the given set of numbers to draw from
  let lineWinningDrawIndex = drawSet.length + 1;
  lines.forEach((line) => {
    const thisLineWinningDrawIndex = findLineWinningDrawIndex(line);
    if (thisLineWinningDrawIndex < lineWinningDrawIndex) {
      lineWinningDrawIndex = thisLineWinningDrawIndex;
    }
  });
  return lineWinningDrawIndex;
};

const findBoard = () => {
  // Assume one board will be solved given set of numbers to draw from
  let winningDrawIndex = drawSet.length + 1;
  let winningBoard;

  for (const board of boards) {
    const thisWinningDrawIndex = findBoardWinningDrawIndex(board);
    // A winning board wins earliest
    if (thisWinningDrawIndex < winningDrawIndex) {
      winningDrawIndex = thisWinningDrawIndex;
      winningBoard = board;
    }
  }

  const lastNumberDrawn = drawSet[winningDrawIndex];

  const draw = drawSet.slice(0, drawSet.indexOf(lastNumberDrawn) + 1);

  const remainingNumbers = winningBoard
    .split(/\s+/)
    .filter((num) => !draw.includes(num));

  return (
    remainingNumbers.reduce((sum, value) => sum + Number(value), 0) *
    lastNumberDrawn
  );
};

const part1 = () => findBoard();
// console.log('Part 1: ', time(part1));
// 1.33 ms

export default part1;
