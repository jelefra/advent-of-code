// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

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

// A winning board wins earliest
// Assume one board will be solved given set of numbers to draw from
const winning = (a, b) => a < b;
const losing = (a, b) => !winning(a, b);

const findBoard = (criteria, benchmark) => {
  let winningDrawIndex = benchmark;
  let winningBoard;

  for (let board of boards) {
    const thisWinningDrawIndex = findBoardWinningDrawIndex(board);
    if (criteria(thisWinningDrawIndex, winningDrawIndex)) {
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

// A losing board will be solved after the first draw
const part2 = () => findBoard(losing, 0);
// console.log('Part 2: ', time(part2));
// 1.33 ms

module.exports = { part2 };
