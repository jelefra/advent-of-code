// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time, convertBinaryToDecimal } from '../../helpers';

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

export default part1;
