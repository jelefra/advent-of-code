import part1 from './part1';
import part2 from './part2';
import { getInput } from '../../helpers';

const testInput1 = getInput('./src/2022/05/test-input-1.txt', '\n\n');

describe('Advent of Code 2022', () => {
  describe('day 5', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1(testInput1);
        expect(answer).toEqual('CMZ');
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual('QNNTGTPFN');
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2(testInput1);
        expect(answer).toEqual('MCD');
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual('GGNPJBTTR');
      });
    });
  });
});
