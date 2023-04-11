// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input: [string, string][] = getInput('./src/2022/04/input.txt').map(
  (pair) => pair.split(',')
);

type Sections = [number, number];

const startsOrEndsIn = (a: Sections, b: Sections) => {
  const [lowA, highA] = a;
  const [lowB, highB] = b;
  return (lowA >= lowB && lowA <= highB) || (highA >= lowB && highA <= highB);
};

const parse = (sectionsStr: string) =>
  sectionsStr.split('-').map(Number) as Sections;

const part2 = (data = input) => {
  return data.reduce((total, [a, b]) => {
    const sectionsA = parse(a);
    const sectionsB = parse(b);
    return (total +=
      startsOrEndsIn(sectionsA, sectionsB) ||
      startsOrEndsIn(sectionsB, sectionsA)
        ? 1
        : 0);
  }, 0);
};
// console.log('Part 2: ', time(part2));
// 1.5 ms

export default part2;
