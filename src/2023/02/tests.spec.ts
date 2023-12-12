import part1 from './part1';
import part2 from './part2';

const testInput = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
];

describe('Advent of Code 2023', () => {
  describe('day 2', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1(testInput);
        expect(answer).toEqual(8);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(2061);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2(testInput);
        expect(answer).toEqual(2286);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(72596);
      });
    });
  });
});
