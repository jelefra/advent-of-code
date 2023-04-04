import part1 from './part1';
import part2 from './part2';

describe('Advent of Code 2022', () => {
  describe('day 1', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1([
          [1000, 2000, 3000],
          [4000],
          [5000, 6000],
          [7000, 8000, 9000],
          [10000],
        ]);
        expect(answer).toEqual(24000);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(72478);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2([
          [1000, 2000, 3000],
          [4000],
          [5000, 6000],
          [7000, 8000, 9000],
          [10000],
        ]);
        expect(answer).toEqual(45000);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(210367);
      });
    });
  });
});
