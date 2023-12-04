// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2023/01/input.txt');

const isDigitCharCode = (x: string) =>
  x.charCodeAt(0) > 47 && x.charCodeAt(0) < 58;

const digits: { [key: string]: number } = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const findAllIndexesOf = (
  arr,
  elemToFind,
  pastIndexes = [],
  position = 0
): number[] => {
  const index = arr.indexOf(elemToFind, position);
  return index === -1
    ? pastIndexes
    : findAllIndexesOf(arr, elemToFind, [...pastIndexes, index], index + 1);
};

const findLastIndexOf = (arr, fn) =>
  arr.findIndex(fn) === -1
    ? -1
    : arr.length - 1 - [...arr].reverse().findIndex(fn);

type Digit = { index: number; value: number | string };

const part2 = (data = input) => {
  return data.reduce((total, row) => {
    const spelledDigits = Object.keys(digits).reduce(
      (matches: Digit[], spelled) => {
        const allIndexesOf = findAllIndexesOf(row, spelled);
        if (allIndexesOf.length > 0) {
          matches.push(
            ...allIndexesOf.map((index) => ({
              index,
              value: digits[spelled],
            }))
          );
        }
        return matches;
      },
      []
    );

    const rowChars: string[] = row.split('');
    const numericDigits: Digit[] = [
      ...(rowChars.findIndex(isDigitCharCode) > -1
        ? [
            {
              index: rowChars.findIndex(isDigitCharCode),
              value: rowChars.find(isDigitCharCode),
            },
            {
              index: findLastIndexOf(rowChars, isDigitCharCode),
              value: [...rowChars].reverse().find(isDigitCharCode),
            },
          ]
        : []),
    ];

    const sortedDigits = [...spelledDigits, ...numericDigits].sort(
      (a, b) => a.index - b.index
    );

    const first = sortedDigits[0].value;
    const last = sortedDigits.slice(-1)[0].value;

    return total + Number(`${first}${last}`);
  }, 0);
};
// console.log('Part 2: ', time(part2));
// 8.2 ms

export default part2;
