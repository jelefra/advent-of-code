// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2023/02/input.txt');

type Content = { red: number; green: number; blue: number };

const CONTENT = { red: 12, green: 13, blue: 14 };

const calculateGameScore = (game: string) => {
  const [gameStr, sets] = game.split(': ');
  const [, gameId] = gameStr.split(' ');

  const parsedSets: Content[] = sets.split('; ').map((set) =>
    set.match(/\d+ (red|blue|green)/g).reduce(
      (summary, colourStr) => {
        const [num, colour] = colourStr.split(' ');
        summary[colour] = Number(num);
        return summary;
      },
      { red: 0, blue: 0, green: 0 }
    )
  );

  const gamePossible = parsedSets.every(
    ({ red, green, blue }) =>
      red <= CONTENT.red && green <= CONTENT.green && blue <= CONTENT.blue
  );

  return gamePossible ? Number(gameId) : 0;
};

const part1 = (data = input) => {
  return data.reduce((sum, game) => sum + calculateGameScore(game), 0);
};
// console.log('Part 1: ', time(part1));
// 1.1 ms

export default part1;
