import part1 from './part1';
import part2 from './part2';

describe('Advent of Code 2021', () => {
  describe('day 2', () => {
    it('passes part 1', () => {
      const answer = part1();
      expect(answer).toEqual(1728414);
    });

    it('passes part 2', () => {
      const answer = part2();
      expect(answer).toEqual(1765720035);
    });
  });
});
