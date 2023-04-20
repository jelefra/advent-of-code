import part1 from './part1';
import part2 from './part2';

describe('Advent of Code 2022', () => {
  describe('day 8', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1([
          ['3', '0', '3', '7', '3'],
          ['2', '5', '5', '1', '2'],
          ['6', '5', '3', '3', '2'],
          ['3', '3', '5', '4', '9'],
          ['3', '5', '3', '9', '0'],
        ]);
        expect(answer).toEqual(21);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(1796);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2([
          ['3', '0', '3', '7', '3'],
          ['2', '5', '5', '1', '2'],
          ['6', '5', '3', '3', '2'],
          ['3', '3', '5', '4', '9'],
          ['3', '5', '3', '9', '0'],
        ]);
        expect(answer).toEqual(8);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(288120);
      });
    });
  });
});
