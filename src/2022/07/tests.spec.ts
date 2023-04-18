import part1 from './part1';
import part2 from './part2';
import { getInput } from '../../helpers';

const testInput1 = getInput('./src/2022/07/test-input-1.txt');

describe('Advent of Code 2022', () => {
  describe('day 7', () => {
    describe('part 1', () => {
      it('passes with test input', () => {
        const answer = part1([...testInput1]);
        expect(answer).toEqual(95437);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(1501149);
      });
    });

    describe('part 2', () => {
      it('passes with test input', () => {
        const answer = part2([...testInput1]);
        expect(answer).toEqual(24933642);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(10096985);
      });
    });
  });
});
