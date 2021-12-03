const day1 = require('./01.js');
const day2 = require('./02.js');
const day3 = require('./03.js');

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

  describe('day 2', () => {
    it('passes part 1', () => {
      const answer = day2.part1();
      expect(answer).toEqual(1728414);
    });

    it('passes part 2', () => {
      const answer = day2.part2();
      expect(answer).toEqual(1765720035);
    });
  });

  describe('day 3', () => {
    it('passes part 1', () => {
      const answer = day3.part1();
      expect(answer).toEqual(3277364);
    });

    it('passes part 2', () => {
      const answer = day3.part2();
      expect(answer).toEqual(5736383);
    });
  });
});
