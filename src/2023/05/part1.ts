// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2023/05/input.txt', '\n\n').map((category) =>
  category.split('\n')
);

export type Range = {
  destinationStart: number;
  sourceStart: number;
  length: number;
};

const getRange = (value: number, ranges: Range[]) =>
  ranges.find(
    ({ sourceStart, length }) =>
      value >= sourceStart && value < sourceStart + length
  );

const getDestination = (value: number, ranges: Range[]): number => {
  const range = getRange(value, ranges);
  return range ? value + range.destinationStart - range.sourceStart : value;
};

const getLocation = (seed: number, maps: Range[][]) =>
  maps.reduce((value, map) => getDestination(value, map), seed);

export const formatMaps = (maps: string[][]): Range[][] =>
  maps.map((map) =>
    map.slice(1).map((range) => {
      const [destinationStart, sourceStart, length] = range
        .match(/(\d+)/g)
        .map(Number);
      return { destinationStart, sourceStart, length };
    })
  );

const part1 = (data = input) => {
  const [[seedInput], ...mapsInput] = data;
  const seeds: number[] = seedInput.match(/(\d+)+/g).map(Number);
  const maps = formatMaps(mapsInput);
  return Math.min(...seeds.map((seed) => getLocation(seed, maps)));
};
// console.log('Part 1: ', time(part1));
// 0.24 ms

export default part1;
