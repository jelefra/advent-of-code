const { part1 } = require('./part1');
const { part2 } = require('./part2');

describe('Advent of Code 2021', () => {
  describe('day 4', () => {
    it('passes part 1', () => {
      const answer = part1();
      expect(answer).toEqual(10680);
    });

    it('passes part 2', () => {
      const answer = part2();
      expect(answer).toEqual(31892);
    });
  });
});
