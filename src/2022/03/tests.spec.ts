import part1 from './part1';
import part2 from './part2';

describe('Advent of Code 2022', () => {
  describe('day 3', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1([
          'vJrwpWtwJgWrhcsFMMfFFhFp',
          'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
          'PmmdzqPrVvPwwTWBwg',
          'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
          'ttgJtRGJQctTZtZT',
          'CrZsJsPPZsGzwwsLwLmpwMDw',
        ]);
        expect(answer).toEqual(157);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(7821);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2([
          'vJrwpWtwJgWrhcsFMMfFFhFp',
          'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
          'PmmdzqPrVvPwwTWBwg',
          'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
          'ttgJtRGJQctTZtZT',
          'CrZsJsPPZsGzwwsLwLmpwMDw',
        ]);
        expect(answer).toEqual(70);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(2752);
      });
    });
  });
});
