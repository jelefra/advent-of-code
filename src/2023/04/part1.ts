// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2023/04/input.txt');

export const parseCard = (
  card: string
): { cardIndex: number; winners: number[]; picks: number[] } => {
  const [, cardIndex, winners, picks] = card.match(
    /Card +(\d+): +([\d ]+) \| +([\d ]+)/
  );
  return {
    cardIndex: Number(cardIndex),
    winners: winners.match(/\d+/g).map(Number), // Mapped for typing purposes
    picks: picks.match(/\d+/g).map(Number),
  };
};

const score = (card: string) => {
  const { winners, picks } = parseCard(card);
  return picks.reduce(
    (summary, pick) => {
      if (winners.includes(pick)) {
        const countOfWinsSoFar = summary.winsSoFar;
        summary.score = 2 ** countOfWinsSoFar;
        summary.winsSoFar += 1;
      }
      return summary;
    },
    { winsSoFar: 0, score: 0 }
  ).score;
};

const part1 = (data = input) => {
  return data.reduce((total, card) => (total += score(card)), 0);
};
// console.log('Part 1: ', time(part1));
// 1.1 ms

export default part1;
