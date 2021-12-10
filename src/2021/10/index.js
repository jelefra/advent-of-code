// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/10/input.txt');

const removeValidChunks = (line) => {
  const regex = /\(\)|\[]|\{}|<>/;
  while (regex.test(line)) {
    line = line.replace(regex, '');
  }
  return line;
};

const hasClosingCharacter = (result) => /[)\]}>]/.test(result);

const findWrongClosingCharacter = (result) => result.match(/[)\]}>]/)[0];

const points = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const part1 = () =>
  input
    .reduce((acc, line) => {
      const remainder = removeValidChunks(line);
      if (hasClosingCharacter(remainder)) {
        acc.push(findWrongClosingCharacter(remainder));
      }
      return acc;
    }, [])
    .map((char) => points[char])
    .reduce((sum, points) => sum + points);
// console.log('Part 1: ', time(part1));
// 1.30 ms

const opposites = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};

const points2 = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

const findCharactersToComplete = (result) =>
  result
    .split('')
    .map((char) => opposites[char])
    .reverse()
    .join('');

const part2 = () => {
  const allScores = input
    .reduce((charactersToComplete, line) => {
      const result = removeValidChunks(line);
      if (!hasClosingCharacter(result)) {
        charactersToComplete.push(findCharactersToComplete(result));
      }
      return charactersToComplete;
    }, [])
    .map((characters) =>
      characters
        .split('')
        .reduce((total, character) => total * 5 + points2[character], 0)
    );

  const midPoint = Math.floor(allScores.length / 2);

  return allScores.sort((a, b) => a - b)[midPoint];
};
// console.log('Part 2: ', time(part2));
// 1.37 ms

module.exports = { part1, part2 };
