// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2023/02/input.txt');

type Content = { red: number; green: number; blue: number };

const calcMinContentProduct = (game: string) => {
  const [, sets] = game.split(': ');

  const minContent: Content = sets.split('; ').reduce(
    (content, set) => {
      const { red, blue, green }: Content = set
        .match(/\d+ (red|blue|green)/g)
        .reduce(
          (summary, colourStr) => {
            const [num, colour] = colourStr.split(' ');
            summary[colour] = Number(num);
            return summary;
          },
          { red: 0, blue: 0, green: 0 }
        );
      content.red = Math.max(content.red, red);
      content.blue = Math.max(content.blue, blue);
      content.green = Math.max(content.green, green);
      return content;
    },
    { red: 0, blue: 0, green: 0 }
  );

  return Object.values(minContent).reduce(
    (total, value) => (total *= value),
    1
  );
};

const part2 = (data = input) => {
  return data.reduce((sum, game) => sum + calcMinContentProduct(game), 0);
};
// console.log('Part 2: ', time(part2));
// 1.3 ms

export default part2;
