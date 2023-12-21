// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

import { formatMaps, Range } from './part1';

const input = getInput('./src/2023/05/input.txt', '\n\n').map((category) =>
  category.split('\n')
);

type SeedRange = { start: number; end: number };

const seedInRange = (seed: number, ranges: SeedRange[]) =>
  ranges.some(({ start, end }) => seed >= start && seed <= end);

const getRange = (value: number, ranges: Range[]) =>
  ranges.find(
    ({ destinationStart, length }) =>
      value >= destinationStart && value < destinationStart + length
  );

const getSource = (value: number, ranges: Range[]): number => {
  const range = getRange(value, ranges);
  return range ? value + range.sourceStart - range.destinationStart : value;
};

const getSeedNumber = (maps: Range[][], location: number) =>
  maps.reduceRight((value, map) => getSource(value, map), location);

const getSeedRanges = (seedInput: string): SeedRange[] =>
  seedInput.match(/(\d+ \d+)/g).map((range) => {
    const [start, length] = range.match(/\d+/g).map(Number);
    return { start, end: start + length - 1 };
  });

const part2 = (data = input) => {
  const [[seedInput], ...mapsInput] = data;
  const seedRanges = getSeedRanges(seedInput);
  const maps = formatMaps(mapsInput);

  for (let location = 0; location < Infinity; location++) {
    const seedNumber = getSeedNumber(maps, location);
    if (seedInRange(seedNumber, seedRanges)) {
      return location;
    }
  }
  throw new Error('Location not found');
};
// console.log('Part 2: ', time(part2, 5));
// 44s

export default part2;
