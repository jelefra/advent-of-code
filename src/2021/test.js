const day1 = require('./01.js');

describe('Advent of Code 2021', () => {
  describe('day 1', () => {
    it('passes part 1', () => {
      const answer = day1.part1();
      expect(answer).toEqual(1676);
    });

    it('passes part 2', () => {
      const answer = day1.part2();
      expect(answer).toEqual(1706);
    });
  });
});
