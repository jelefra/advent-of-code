// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/15/input.txt');

const part1 = (data = input) => {
  const map = data.map((row) => row.split('').map(Number));
  const rowLength = map[0].length;
  const columnLength = map.length;
  const options = [[[0, 0]]];

  let min;
  while (options.length > 0) {
    const path = options.pop();
    const [x, y] = path[path.length - 1];
    const current =
      path.reduce((sum, [x, y]) => sum + map[y][x], 0) - map[0][0];

    if (x === rowLength - 1 && y === columnLength - 1) {
      min = current <= (min || current) ? current : min;
    } else if (current <= (min || current)) {
      if (x + 1 < rowLength) {
        options.push([...path, [x + 1, y]]);
      }
      if (y + 1 < columnLength) {
        options.push([...path, [x, y + 1]]);
      }
    }
  }

  return min;
};

export default part1;
