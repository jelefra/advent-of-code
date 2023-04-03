// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/08/input.txt');

/*

    0:      1:      2:      3:      4:
   aaaa    ....    aaaa    aaaa    ....
  b    c  .    c  .    c  .    c  b    c
  b    c  .    c  .    c  .    c  b    c
   ....    ....    dddd    dddd    dddd
  e    f  .    f  e    .  .    f  .    f
  e    f  .    f  e    .  .    f  .    f
   gggg    ....    gggg    gggg    ....

    5:      6:      7:      8:      9:
   aaaa    aaaa    aaaa    aaaa    aaaa
  b    .  b    .  .    c  b    c  b    c
  b    .  b    .  .    c  b    c  b    c
   dddd    dddd    ....    dddd    dddd
  .    f  e    f  .    f  e    f  .    f
  .    f  e    f  .    f  e    f  .    f
   gggg    gggg    ....    gggg    gggg


  0 a, b, c, e, f, g          6
  1 c, f                      2 (unique length)
  2 a, c, d, e, g             5
  3 a, c, d, f, g             5
  4 b, c, d, f                4 (unique length)
  5 a, b, d, f, g             5
  6 a, b, d, e, f, g          6
  7 a, c, f                   3 (unique length)
  8 a, b, c, d, e, f, g       7 (unique length)
  9 a, b, c, d, f, g          6

*/

const findNum = (pattern, digits) =>
  digits.indexOf(
    digits.find(
      (digit) =>
        digit.length === pattern.length &&
        pattern.split('').every((letter) => digit.includes(letter))
    )
  );

// Deduct from:
//   Digit 1 (C, F wires)
//   Known: C
const deductF = (pattern, c, cf) =>
  cf.filter((letter) => letter !== c).join('');

// Deduct from:
//   Digit 2 (A, C, D, E, G wires)
//   Known: A, D, E, G
const deductC = (pattern, wiresInDigitsTwoThreeFive, a, d, e, g) =>
  wiresInDigitsTwoThreeFive
    // As opposed to digits 3 and 5, digit 2 uses segment E
    .find((pattern) => pattern.includes(e))
    .split('')
    .find((letter) => ![a, d, e, g].includes(letter));

// Wires not overlapping digits 4 and 6
// Compare wires of:
//   digit 4 (B, C, D, F wires)
//   digit 9 (A, B, D, E, F, G wires),
// Known: A
const deductEG = (pattern, a, d, digit4) => {
  // We can't directly identify the pattern for digit 9 as it has the same length as digits 0 and 6
  // However we can deduce it given wire A
  const wiresInPatternsOfLength6 = getWiresByPatternLength(pattern, 6);

  // Digit 0 doesn't include segment D
  const wiresInDigitsSixAndNine = wiresInPatternsOfLength6.filter((pattern) =>
    pattern.includes(d)
  );

  // Remove known wire A and wires from digit 4
  // What remains of digit 9 has a smaller overlap with digit 4 than what remains of digit 6
  // We end up with two arrays, one of length 1 (contains G), one of length 2 (contains G and E)
  const remainingWires = wiresInDigitsSixAndNine
    .map((pattern) => pattern.replace(a, ''))
    .map((pattern) =>
      pattern.split('').filter((letter) => !digit4.includes(letter))
    )
    .sort((a, b) => a.length - b.length);

  const g = remainingWires[0][0];
  const e = remainingWires[1].find((letter) => letter !== g);

  return { g, e };
};

// Either of the two wires not overlapping between digits 7 and 3
// Compare wires of:
//   digit 7 (A, C, F wires)
//   digits 3 (A, C, D, F, G wires),
const deductSegmentDGWires = (pattern, wiresInDigitsTwoThreeFive) => {
  // Digit 7 (C, F, W wires)
  const acfw = getACF(pattern);

  // We can't directly identify the pattern for digit 3 as it has the same length as digits 2 and 5
  // However we can deduce it because it has only the smallest overlap with digit 7 : D and G (as opposed to B|E, D and G
  return wiresInDigitsTwoThreeFive
    .map((pattern) =>
      pattern
        .split('')
        .filter((letter) => !acfw.includes(letter))
        .join('')
    )
    .sort((a, b) => a.length - b.length)[0]
    .split('');
};

// Either of the two wires not overlapping between digits 1 and 4
//   digit 1 (C, F wires),
//   digit 4 (B, C, D, F wires)
const deductSegmentBDWires = (pattern, cfw) => {
  const bcdf = getBCDF(pattern);
  return bcdf.filter((letter) => !cfw.includes(letter));
};

// Overlap of BD and DG wires
const deductD = (pattern, CFWires, wiresInDigitsTwoThreeFive) => {
  const bd = deductSegmentBDWires(pattern, CFWires);
  const dgw = deductSegmentDGWires(pattern, wiresInDigitsTwoThreeFive);
  return bd.find((letter) => dgw.includes(letter));
};

const getWiresByPatternLength = (pattern, len) =>
  pattern.filter(({ length }) => length === len);

// Deduct wire connected to segment "a"
// Compare wires of:
//   digit 1 (C, F wires),
//   digit 7 (A, C, F wires)
const deductA = (pattern, cfw) => {
  const acf = getACF(pattern);
  return acf.find((wire) => !cfw.includes(wire));
};

// Each entry contains exactly one pattern for each digit
// No need to deduplicate
const findWiresByPatternLength = (pattern, len) =>
  pattern.find(({ length }) => length === len).split('');

// Unique length of 2, corresponds to digit 1
const getCF = (pattern) => findWiresByPatternLength(pattern, 2);

// Unique length of 3, corresponds to digit 7
const getACF = (pattern) => findWiresByPatternLength(pattern, 3);

// Unique length of 4, corresponds to digit 1
const getBCDF = (pattern) => findWiresByPatternLength(pattern, 4);

const getWires = (pattern, digit4Wires) => {
  const cf = getCF(pattern);
  const a = deductA(pattern, cf);
  const wiresInDigitsTwoThreeFive = getWiresByPatternLength(pattern, 5);
  const d = deductD(pattern, cf, wiresInDigitsTwoThreeFive);
  const { e, g } = deductEG(pattern, a, d, digit4Wires);

  const c = deductC(pattern, wiresInDigitsTwoThreeFive, a, d, e, g);
  const f = deductF(pattern, c, cf);
  const b = 'abcdefg'
    .split('')
    .find((letter) => ![a, c, d, e, f, g].includes(letter));
  return { a, b, c, d, e, f, g };
};

const findPattern = (patterns, len) =>
  patterns.find((pattern) => pattern.length === len);

const decodeOutputValue = (pattern, outputValues) => {
  const digit1Wires = findPattern(pattern, 2);
  const digit4Wires = findPattern(pattern, 4);
  const digit7Wires = findPattern(pattern, 3);
  const digit8Wires = findPattern(pattern, 7);

  const { a, b, c, d, e, f, g } = getWires(pattern, digit4Wires);

  const digit0Wires = [a, b, c, e, f, g].join('');
  const digit2Wires = [a, c, d, e, g].join('');
  const digit3Wires = [a, c, d, f, g].join('');
  const digit5Wires = [a, b, d, f, g].join('');
  const digit6Wires = [a, b, d, e, f, g].join('');
  const digit9Wires = [a, b, c, d, f, g].join('');

  const digitWires = [
    digit0Wires,
    digit1Wires,
    digit2Wires,
    digit3Wires,
    digit4Wires,
    digit5Wires,
    digit6Wires,
    digit7Wires,
    digit8Wires,
    digit9Wires,
  ];

  return Number(
    outputValues.map((value) => findNum(value, digitWires)).join('')
  );
};

const part2 = () =>
  input.reduce((total, entry) => {
    const [pattern, outputValues] = entry
      .split(' | ')
      .map((element) => element.split(' '));
    return total + decodeOutputValue(pattern, outputValues);
  }, 0);
// console.log('Part 2: ', time(part2));
// 1.86 ms

export default part2;
