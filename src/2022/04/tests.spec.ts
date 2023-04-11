import part1 from './part1';
import part2 from './part2';

describe('Advent of Code 2022', () => {
  describe('day 4', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1([
          ['2-4', '6-8'],
          ['2-3', '4-5'],
          ['5-7', '7-9'],
          ['2-8', '3-7'],
          ['6-6', '4-6'],
          ['2-6', '4-8'],
        ]);
        expect(answer).toEqual(2);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(466);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2([
          ['2-4', '6-8'],
          ['2-3', '4-5'],
          ['5-7', '7-9'],
          ['2-8', '3-7'],
          ['6-6', '4-6'],
          ['2-6', '4-8'],
        ]);
        expect(answer).toEqual(4);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(865);
      });
    });
  });
});
