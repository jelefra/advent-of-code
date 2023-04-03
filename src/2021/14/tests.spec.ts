import { getInput } from '../../helpers';
import part1 from './part1';
import part2 from './part2';

const testInput1 = getInput('./src/2021/14/test-input-1.txt', '\n\n');

describe('Advent of Code 2021', () => {
  describe('day 14', () => {
    describe('part1', () => {
      fit('passes with testInput1', () => {
        const answer = part1(testInput1);
        expect(answer).toEqual(1588);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(2874);
      });
    });

    describe('part 2', () => {
      it('passes with testInput1', () => {
        const answer = part2(testInput1);
        expect(answer).toEqual(2188189693529);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(5208377027195);
      });
    });
  });
});
