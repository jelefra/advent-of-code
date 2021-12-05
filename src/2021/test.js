const day1 = require('./01');
const day2 = require('./02');
const day3 = require('./03');
const day4 = require('./04');
const day5 = require('./05');

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

  describe('day 4', () => {
    it('passes part 1', () => {
      const answer = day4.part1();
      expect(answer).toEqual(10680);
    });

    it('passes part 2', () => {
      const answer = day4.part2();
      expect(answer).toEqual(31892);
    });
  });

  describe('day 5', () => {
    it('passes part 1', () => {
      const answer = day5.part1();
      expect(answer).toEqual(6572);
    });

    it('passes part 2', () => {
      const answer = day5.part2();
      expect(answer).toEqual(21466);
    });
  });
});
