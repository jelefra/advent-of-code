// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/12/input.txt');

const isDeadEnd = (path, option) =>
  path.includes(option) && option.toLowerCase() === option;

const exploreNextPath = (path, connections) => {
  const options = connections[path.slice(-1)[0]];
  const nextPaths = [];
  let counter = 0;
  for (let option of options) {
    if (option === 'end') {
      counter++;
    } else if (!isDeadEnd(path, option)) {
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

  while (incompletePaths.length) {
    const nextPath = incompletePaths.shift();
    const { nextPaths, counter } = exploreNextPath(nextPath, links);
    incompletePaths.push(...nextPaths);
    countOfCompletePaths += counter;
  }

  return countOfCompletePaths;
};

const part1 = (connections = input) => countPaths(connections);
// console.log('Part 1: ', time(part1));
// 5.06 ms

module.exports = { part1 };
