import part1 from './part1';
import part2 from './part2';

const testInput = [
  ['seeds: 79 14 55 13'],
  ['seed-to-soil map:', '50 98 2', '52 50 48'],
  ['soil-to-fertilizer map:', '0 15 37', '37 52 2', '39 0 15'],
  ['fertilizer-to-water map:', '49 53 8', '0 11 42', '42 0 7', '57 7 4'],
  ['water-to-light map:', '88 18 7', '18 25 70'],
  ['light-to-temperature map:', '45 77 23', '81 45 19', '68 64 13'],
  ['temperature-to-humidity map:', '0 69 1', '1 0 69'],
  ['humidity-to-location map:', '60 56 37', '56 93 4'],
];

describe('Advent of Code 2023', () => {
  describe('day 5', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1(testInput);
        expect(answer).toEqual(35);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(388071289);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2(testInput);
        expect(answer).toEqual(46);
      });

      xit('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(84206669);
      });
    });
  });
});
