// eslint-disable-next-line no-unused-vars
const { getInput, time, convertBinaryToDecimal } = require('../../helpers.js');

const input = getInput('./src/2021/03/input.txt');

const part1 = () => {
  const rates = input
    .reduce((bitsByIndex, binary) => {
      binary.split('').forEach((bit, index) => {
        bitsByIndex[index] = bitsByIndex[index] || { 0: 0, 1: 0 };
        bitsByIndex[index][bit]++;
      });
      return bitsByIndex;
    }, [])
    .reduce(
      (rates, bits) => {
        // Unsure what to do in case of equality
        // Equality would be possible considering even count of input numbers
        // Does not affect the solution given supplied input
        if (bits[0] > bits[1]) {
          rates.gamma += '0';
          rates.epsilon += '1';
        } else {
          rates.gamma += '1';
          rates.epsilon += '0';
        }
        return rates;
      },
      { gamma: '', epsilon: '' }
    );

  return (
    convertBinaryToDecimal(rates.gamma) * convertBinaryToDecimal(rates.epsilon)
  );
};
// console.log('Part 1: ', time(part1));
// 0.32 ms

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

module.exports = { part1, part2 };
