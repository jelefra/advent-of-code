// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input: [ShapeOpponent, ShapeSelf][] = getInput(
  './src/2022/02/input.txt'
).map((choices) => choices.split(' '));

type ShapeSelf = 'X' | 'Y' | 'Z';
type ShapeOpponent = 'A' | 'B' | 'C';
type Shapes = {
  [key in ShapeSelf]: {
    is: ShapeOpponent;
    beats: ShapeOpponent;
    score: number;
  };
};
const shapes: Shapes = {
  X: { is: 'A', beats: 'C', score: 1 }, // Rock
  Y: { is: 'B', beats: 'A', score: 2 }, // Paper
  Z: { is: 'C', beats: 'B', score: 3 }, // Scissors
};

type Outcome = 'win' | 'draw' | 'loss';
const outcomeScores: Record<Outcome, number> = {
  win: 6,
  draw: 3,
  loss: 0,
};

const resolveRound = (a: ShapeOpponent, b: ShapeSelf): Outcome => {
  if (a === shapes[b].is) return 'draw';
  if (a === shapes[b].beats) return 'win';
  return 'loss';
};

const part1 = (data = input) =>
  data.reduce(
    (totalScore, [a, b]) =>
      totalScore + shapes[b].score + outcomeScores[resolveRound(a, b)],
    0
  );
// console.log('Part 1: ', time(part1));
// 1.0 ms

export default part1;
