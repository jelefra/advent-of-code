// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input: [string, string][] = getInput('./src/2022/04/input.txt').map(
  (pair) => pair.split(',')
);

type Sections = [number, number];

const contains = (a: Sections, b: Sections) => {
  const [lowA, highA] = a;
  const [lowB, highB] = b;
  return lowA >= lowB && highA <= highB;
};

const parse = (sectionsStr: string) =>
  sectionsStr.split('-').map(Number) as Sections;

const part1 = (data = input) => {
  return data.reduce((total, [a, b]) => {
    const sectionsA = parse(a);
    const sectionsB = parse(b);
    return (total +=
      contains(sectionsA, sectionsB) || contains(sectionsB, sectionsA) ? 1 : 0);
  }, 0);
};
// console.log('Part 1: ', time(part1));
// 1.7 ms

export default part1;
