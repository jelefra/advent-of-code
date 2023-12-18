// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

import { parseCard } from './part1';

const input = getInput('./src/2023/04/input.txt');

const processCards = (data: string[]): number[] => {
  return data.reduce((cardsCount, card) => {
    const { cardIndex, winners, picks } = parseCard(card);
    cardsCount[cardIndex] = (cardsCount[cardIndex] || 0) + 1;
    picks
      .filter((pick) => winners.includes(pick))
      .forEach((winningPick, index) => {
        cardsCount[cardIndex + index + 1] =
          (cardsCount[cardIndex + index + 1] || 0) + cardsCount[cardIndex];
      });
    return cardsCount;
  }, []);
};

const part2 = (data = input) => {
  const cardsCount = processCards(data);
  return cardsCount.reduce((sum, cardCount) => (sum += cardCount), 0);
};
// console.log('Part 2: ', time(part2));
// 0.9 ms

export default part2;
