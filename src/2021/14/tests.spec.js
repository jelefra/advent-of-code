const { getInput } = require('../../helpers.js');
const { part1 } = require('./part1');
const { part2 } = require('./part2');

const testInput1 = getInput('./src/2021/14/test-input-1.txt');

describe('Advent of Code 2021', () => {
  describe('day 14', () => {
    describe('part1', () => {
      it('passes with testInput1', () => {
        const answer = part1(testInput1);
        expect(answer).toEqual(1588);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(2874);
      });
    });

    describe('part 2', () => {
      it('passes with testInput1', () => {
        const answer = part2(testInput1);
        expect(answer).toEqual(2188189693529);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(5208377027195);
      });
    });
  });
});
