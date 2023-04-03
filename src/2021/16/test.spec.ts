import part1 from './part1';
import part2 from './part2';

const testInput1 = '8A004A801A8002F478';
const testInput2 = '620080001611562C8802118E34';
const testInput3 = 'C0015000016115A2E0802F182340';
const testInput4 = 'A0016C880162017C3686B18A3D4780';

const testInput5 = 'C200B40A82'; // sum(1, 2)
const testInput6 = '04005AC33890'; // product(6, 9)
const testInput7 = '880086C3E88112'; // min(7, 8, 9)
const testInput8 = 'CE00C43D881120'; // max(7, 8, 9)
const testInput9 = 'D8005AC2A8F0'; // lessThan(5, 15)
const testInput10 = 'F600BC2D8F'; // greaterThan(5, 15)
const testInput11 = '9C005AC2F8F0'; // equalTo(5, 15)
const testInput12 = '9C0141080250320F1802104A08'; // equalTo(sum(1, 3), product(2, 2))

describe('Advent of Code 2021', () => {
  describe('day 16', () => {
    describe('part1', () => {
      it('passes with testInput1', () => {
        const answer = part1(testInput1);
        expect(answer).toEqual(16);
      });

      it('passes with testInput2', () => {
        const answer = part1(testInput2);
        expect(answer).toEqual(12);
      });

      it('passes with testInput3', () => {
        const answer = part1(testInput3);
        expect(answer).toEqual(23);
      });

      it('passes with testInput4', () => {
        const answer = part1(testInput4);
        expect(answer).toEqual(31);
      });

      it('passes with full input', () => {
        const answer = part1();
        expect(answer).toEqual(977);
      });
    });

    describe('part2', () => {
      it('passes with testInput5 ', () => {
        const answer = part2(testInput5);
        expect(answer).toEqual(3);
      });

      it('passes with testInput6 ', () => {
        const answer = part2(testInput6);
        expect(answer).toEqual(54);
      });

      it('passes with testInput7 ', () => {
        const answer = part2(testInput7);
        expect(answer).toEqual(7);
      });

      it('passes with testInput8 ', () => {
        const answer = part2(testInput8);
        expect(answer).toEqual(9);
      });

      it('passes with testInput9 ', () => {
        const answer = part2(testInput9);
        expect(answer).toEqual(1);
      });

      it('passes with testInput10 ', () => {
        const answer = part2(testInput10);
        expect(answer).toEqual(0);
      });

      it('passes with testInput11', () => {
        const answer = part2(testInput11);
        expect(answer).toEqual(0);
      });

      it('passes with testInput12', () => {
        const answer = part2(testInput12);
        expect(answer).toEqual(1);
      });

      it('passes with full input', () => {
        const answer = part2();
        expect(answer).toEqual(101501020883);
      });
    });
  });
});
