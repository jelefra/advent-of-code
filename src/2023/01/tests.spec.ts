import part1 from './part1';
import part2 from './part2';

describe('Advent of Code 2023', () => {
  describe('day 1', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1([
          '1abc2',
          'pqr3stu8vwx',
          'a1b2c3d4e5f',
          'treb7uchet',
        ]);
        expect(answer).toEqual(142);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(55607);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2([
          'two1nine',
          'eightwothree',
          'abcone2threexyz',
          'xtwone3four',
          '4nineeightseven2',
          'zoneight234',
          '7pqrstsixteen',
        ]);
        expect(answer).toEqual(281);
      });

      [
        [['1'], 11],
        [['12'], 12],
        [['one'], 11],
        [['onetwo'], 12],
        [['one6one'], 11],
      ].forEach(([input, res]) => {
        it(`passes with custom input '${input}'`, () => {
          const answer = part2(input);
          expect(answer).toEqual(res);
        });
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(55291);
      });
    });
  });
});
