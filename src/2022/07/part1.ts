// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2022/07/input.txt');

type Dir = { [key: string]: Dir | File };
type File = { [key: string]: number };
type Sizes = { [key: string]: number };

const getDir = (structure, path) => {
  let dir = structure;
  while (path.length) {
    const nextDir = path.shift();
    dir = dir[nextDir];
  }
  return dir;
};

export const parse = (
  lines: string[],
  structure = {},
  wd: string[] = []
): Dir => {
  if (lines.length === 0) return structure;

  const next = lines.shift();

  if (next === '$ cd ..') return parse(lines, structure, wd.slice(0, -1));

  const currentDir = getDir(structure, [...wd]) || structure;

  if (next.startsWith('$ cd ')) {
    const dir = next.replace('$ cd ', '');
    currentDir[dir] = currentDir[dir] || {};
    wd.push(dir);
    return parse(lines, structure, wd);
  }

  if (next.startsWith('$ ls')) {
    while (lines.length && !lines[0].startsWith('$')) {
      const nextLine = lines.shift();
      if (nextLine.startsWith('dir ')) {
        const dir = nextLine.replace('dir ', '');
        currentDir[dir] = {};
      } else {
        const [size, fileName] = nextLine.split(' ');
        currentDir[fileName] = Number(size);
      }
    }
    return parse(lines, structure, wd);
  }
};

export const weigh = (
  nodes: { parents: string[]; node: [string, File | Dir] }[],
  sizes: Sizes = {}
): Sizes => {
  while (nodes.length > 0) {
    const node = nodes.shift();
    const {
      parents,
      node: [name, value],
    } = node;
    if (typeof value === 'number') {
      parents
        // Account for different directories with identical names
        .map((_, i, arr) => arr.slice(0, i + 1).join('.'))
        .forEach((parent) => {
          sizes[parent] = (sizes[parent] || 0) + value;
        });
    } else {
      const nodesToPush = Object.entries(value).map((node) => ({
        parents: [...parents, name],
        node,
      }));
      nodes.push(...nodesToPush);
    }
    weigh(nodes, sizes);
  }
  return sizes;
};

const part1 = (data = [...input]) => {
  const structure = parse(data);
  const sizes = weigh([{ parents: [], node: Object.entries(structure)[0] }]);
  return Object.values(sizes)
    .filter((size) => size <= 100000)
    .reduce((sum, size) => sum + size, 0);
};
// console.log('Part 1: ', time(part1));
// 1.9ms

export default part1;
