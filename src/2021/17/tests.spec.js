import part1 from './part1';
import part1Refactor1 from './part1Refactor1';
import part2 from './part2';

const testInput1 = 'target area: x=20..30, y=-10..-5';

describe('Advent of Code 2021', () => {
  describe('day 17', () => {
    describe('part1', () => {
      it('passes with testInput1', () => {
        const answer = part1(testInput1);
        expect(answer).toEqual(45);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(5886);
      });
    });

    describe('part1Refactor1', () => {
      it('passes with testInput1', () => {
        const answer = part1Refactor1(testInput1);
        expect(answer).toEqual(45);
      });

      it('passes with full input', () => {
        const answer = part1Refactor1();
        expect(answer).toEqual(5886);
      });
    });

    describe('part2', () => {
      it('passes with testInput5 ', () => {
        const answer = part2(testInput1);
        expect(answer).toEqual(112);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(1806);
      });
    });
  });
});
