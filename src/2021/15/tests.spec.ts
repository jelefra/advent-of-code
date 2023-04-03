import { getInput } from '../../helpers';
import part1 from './part1';
import part2 from './part2';
import part1Attempt1 from './part1Attempt1';

const testInput1 = getInput('./src/2021/15/test-input-1.txt');

describe('Advent of Code 2021', () => {
  describe('day 15', () => {
    describe('part1attempt1', () => {
      it('passes with testInput1', () => {
        const answer = part1Attempt1(testInput1);
        expect(answer).toEqual(40);
      });

      // Too slow
      xit('passes with full input', () => {
        const answer = part1Attempt1();
        expect(answer).toEqual(503);
      });
    });

    describe('part1', () => {
      it('passes with testInput1', () => {
        const answer = part1(testInput1);
        expect(answer).toEqual(40);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(503);
      });
    });

    describe('part 2', () => {
      it('passes with testInput1', () => {
        const answer = part2(testInput1);
        expect(answer).toEqual(315);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(2853);
      });
    });
  });
});
