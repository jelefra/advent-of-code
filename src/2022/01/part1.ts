// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input: number[][] = getInput('./src/2022/01/input.txt', '\n\n').map(
  (elfFoodItems) => elfFoodItems.split('\n').map(Number)
);

const part1 = (data = input) => {
  return Math.max(
    ...data.map((elfFoodItems) =>
      elfFoodItems.reduce(
        (elfCalories, foodItemCalories) => elfCalories + foodItemCalories,
        0
      )
    )
  );
};
// console.log('Part 1: ', time(part1));
// 0.01 ms

export default part1;
