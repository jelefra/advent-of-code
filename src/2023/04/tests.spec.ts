import part1 from './part1';
import part2 from './part2';

const testInput = [
  'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
  'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
  'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
  'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
  'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
  'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
];

describe('Advent of Code 2023', () => {
  describe('day 4', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1(testInput);
        expect(answer).toEqual(13);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(21821);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2(testInput);
        expect(answer).toEqual(30);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(5539496);
      });
    });
  });
});
