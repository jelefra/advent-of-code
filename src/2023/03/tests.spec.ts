import part1 from './part1';
import part2 from './part2';

const testInput = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
];

const testInput2 = [
  '.....100.........',
  '......*..........',
  '.....2...........',
];

const testInput3 = [
  '.....100.........',
  '.....3*..........',
  '.................',
];

const testInput4 = [
  '.....100.........',
  '.....4*1.........',
  '.................',
];

const testInput5 = [
  '.....1.1.........',
  '.....5*..........',
  '.................',
];

describe('Advent of Code 2023', () => {
  describe('day 3', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1(testInput);
        expect(answer).toEqual(4361);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(509115);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2(testInput);
        expect(answer).toEqual(467835);
      });

      it('passes with test input 2', () => {
        const answer = part2(testInput2);
        expect(answer).toEqual(200);
      });

      it('passes with test input 3', () => {
        const answer = part2(testInput3);
        expect(answer).toEqual(300);
      });

      it('passes with test input 4', () => {
        const answer = part2(testInput4);
        expect(answer).toEqual(0);
      });

      it('passes with test input 5', () => {
        const answer = part2(testInput5);
        expect(answer).toEqual(0);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(75220503);
      });
    });
  });
});
