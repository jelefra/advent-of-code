import part1 from './part1';
import part2 from './part2';

describe('Advent of Code 2022', () => {
  describe('day 6', () => {
    describe('part 1', () => {
      it('passes with test inputs', () => {
        [
          { buffer: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb', result: 7 },
          { buffer: 'bvwbjplbgvbhsrlpgdmjqwftvncz', result: 5 },
          { buffer: 'nppdvjthqldpwncqszvftbrmjlhg', result: 6 },
          { buffer: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', result: 10 },
          { buffer: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', result: 11 },
        ].forEach(({ buffer, result }) => {
          expect(part1(buffer)).toEqual(result);
        });
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(1779);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        [
          { buffer: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb', result: 19 },
          { buffer: 'bvwbjplbgvbhsrlpgdmjqwftvncz', result: 23 },
          { buffer: 'nppdvjthqldpwncqszvftbrmjlhg', result: 23 },
          { buffer: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', result: 29 },
          { buffer: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', result: 26 },
        ].forEach(({ buffer, result }) => {
          expect(part2(buffer)).toEqual(result);
        });
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(2635);
      });
    });
  });
});
