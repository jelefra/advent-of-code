// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/12/input.txt');

const optionIsSmallCaveThatHasBeenVisited = (path, option) =>
  path.includes(option) && option.toLowerCase() === option;

const hasVisitedASmallCaveTwice = (path, smallCaves) =>
  smallCaves.filter(
    (smallCave) => path.filter((cave) => cave === smallCave).length > 1
  ).length > 0;

const isDeadEnd = (path, option, smallCaves) =>
  hasVisitedASmallCaveTwice(path, smallCaves) &&
  optionIsSmallCaveThatHasBeenVisited(path, option);

const exploreNextPath = (path, connections, smallCaves) => {
  const options = connections[path.slice(-1)[0]];
  const nextPaths = [];
  let counter = 0;
  for (const option of options) {
    if (option === 'end') {
      counter++;
    } else if (!isDeadEnd(path, option, smallCaves)) {
      const continuedPath = [...path];
      continuedPath.push(option);
      nextPaths.push(continuedPath);
    }
  }

  return { nextPaths, counter };
};

const determineLinks = (connections) =>
  connections.reduce((links, segment) => {
    const [from, to] = segment.split('-');

    links[from] = links[from] || [];
    !links[from].includes(to) && to !== 'start' && links[from].push(to);

    links[to] = links[to] || [];
    !links[to].includes(from) && from !== 'start' && links[to].push(from);

    return links;
  }, {});

const countPaths = (connections) => {
  const links = determineLinks(connections);
  const incompletePaths = [['start']];
  let countOfCompletePaths = 0;

  const smallCaves = Object.keys(links).filter(
    (cave) => cave !== 'start' && cave !== 'end' && cave.toLowerCase() === cave
  );

  while (incompletePaths.length) {
    const nextPath = incompletePaths.shift();
    const { nextPaths, counter } = exploreNextPath(nextPath, links, smallCaves);
    incompletePaths.push(...nextPaths);
    countOfCompletePaths += counter;
  }

  return countOfCompletePaths;
};

const part2 = (connections = input) => countPaths(connections);
// console.log('Part 2: ', time(part2, 3));
// 21.47s

export default part2;
