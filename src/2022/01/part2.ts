// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input: number[][] = getInput('./src/2022/01/input.txt', '\n\n').map(
  (elfFoodItems) => elfFoodItems.split('\n').map(Number)
);

const part2 = (data = input) => {
  return data
    .map((elfFoodItems) =>
      elfFoodItems.reduce(
        (elfCalories, foodItemCalories) => elfCalories + foodItemCalories,
        0
      )
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((total, current) => total + current);
};
// console.log('Part 2: ', time(part2));
// 0.04 ms

export default part2;
