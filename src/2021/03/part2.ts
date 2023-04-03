// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time, convertBinaryToDecimal } from '../../helpers';

const input = getInput('./src/2021/03/input.txt');

const findMostCommonBit = (numbers, index) => {
  const bits = numbers.reduce(
    (acc, cv) => {
      cv[index] === '0' ? acc[0]++ : acc[1]++;
      return acc;
    },
    { 0: 0, 1: 0 }
  );
  return bits[1] >= bits[0] ? 1 : 0;
};

const findLeastCommonBit = (numbers, index) =>
  findMostCommonBit(numbers, index) === 1 ? 0 : 1;

const filterNumbers = (numbers, criteria, position = 0) => {
  const filteringValue = criteria(numbers, position);
  const filteredNumbers = numbers.filter(
    (number) => Number(number[position]) === filteringValue
  );

  return filteredNumbers.length > 1
    ? filterNumbers(filteredNumbers, criteria, position + 1)
    : filteredNumbers[0];
};

const part2 = () => {
  const oxygenGeneratorRating = filterNumbers(input, findMostCommonBit);
  const CO2ScrubberRating = filterNumbers(input, findLeastCommonBit);

  return (
    convertBinaryToDecimal(oxygenGeneratorRating) *
    convertBinaryToDecimal(CO2ScrubberRating)
  );
};
// console.log('Part 2: ', time(part2));
// 0.76 ms

export default part2;
