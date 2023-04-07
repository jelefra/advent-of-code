import part1 from './part1';
import part2 from './part2';

describe('Advent of Code 2022', () => {
  describe('day 2', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1([
          ['A', 'Y'],
          ['B', 'X'],
          ['C', 'Z'],
        ]);
        expect(answer).toEqual(15);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(15523);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2([
          ['A', 'Y'],
          ['B', 'X'],
          ['C', 'Z'],
        ]);
        expect(answer).toEqual(12);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(15702);
      });
    });
  });
});
