import { getInput } from '../../helpers.js';
import part1 from './part1';
import part2 from './part2';

const testInput1 = getInput('./src/2021/12/test-input-1.txt');
const testInput2 = getInput('./src/2021/12/test-input-2.txt');
const testInput3 = getInput('./src/2021/12/test-input-3.txt');

describe('Advent of Code 2021', () => {
  describe('day 12', () => {
    describe('part1', () => {
      it('passes with testInput1', () => {
        const answer = part1(testInput1);
        expect(answer).toEqual(10);
      });

      it('passes with testInput2', () => {
        const answer = part1(testInput2);
        expect(answer).toEqual(19);
      });

      it('passes with testInput1', () => {
        const answer = part1(testInput3);
        expect(answer).toEqual(226);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(3000);
      });
    });

    describe('part 2', () => {
      it('passes with testInput1', () => {
        const answer = part2(testInput1);
        expect(answer).toEqual(36);
      });

      it('passes with testInput2', () => {
        const answer = part2(testInput2);
        expect(answer).toEqual(103);
      });

      it('passes with testInput3', () => {
        const answer = part2(testInput3);
        expect(answer).toEqual(3509);
      });

      // Too slow
      xit('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(74222);
      });
    });
  });
});
