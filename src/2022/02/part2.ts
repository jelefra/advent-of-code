// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input: [Shape, Outcome][] = getInput('./src/2022/02/input.txt').map(
  (choices) => choices.split(' ')
);

type Shape = 'A' | 'B' | 'C';
type Shapes = {
  [key in Shape]: {
    Z: Shape; // wins against Shape
    Y: Shape; // draws with Shape
    X: Shape; // loses to Shape
    score: number;
  };
};
const shapes: Shapes = {
  A: { Z: 'C', Y: 'A', X: 'B', score: 1 }, // Rock
  B: { Z: 'A', Y: 'B', X: 'C', score: 2 }, // Paper
  C: { Z: 'B', Y: 'C', X: 'A', score: 3 }, // Scissors
};

type Outcome = 'X' | 'Y' | 'Z';
const outcomeScores: Record<Outcome, number> = {
  X: 0,
  Y: 3,
  Z: 6,
};

const findShape = (opponentShape, requiredOutcome): Shape =>
  Object.entries(shapes).find(
    ([, shapeAttributes]) => shapeAttributes[requiredOutcome] === opponentShape
  )[0] as Shape;

const part2 = (data = input) =>
  data.reduce(
    (totalScore, [a, b]) =>
      totalScore + shapes[findShape(a, b)].score + outcomeScores[b],
    0
  );
// console.log('Part 2: ', time(part2));
// 4.1 ms

export default part2;
