// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2022/05/input.txt', '\n\n');

type Instruction = {
  quantity: number;
  from: number;
  to: number;
};

type Stacks = string[][];

const parseStacks = (stacksInput): Stacks => {
  const parsed = stacksInput
    .split('\n')
    .slice(0, -1)
    .map((line) => line.replaceAll('    ', ' ').split(' '))
    .reverse();

  const max = Math.max(...parsed.map(({ length }) => length));

  const structured = [];
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < parsed.length; j++) {
      structured[i] = structured[i] || [];
      parsed[j][i] && structured[i].push(parsed[j][i]);
    }
  }

  return structured;
};

const parseInstructions = (instructionsInput): Instruction[] =>
  instructionsInput.split('\n').map((instructionInput) => {
    // Named capturing groups
    // const re = /move (?<quantity>\d+) from (?<from>\d+) to (?<to>\d+)/;
    // const { quantity, from, to } = instructionInput.match(re).groups;

    const [, quantity, from, to] = instructionInput.match(
      /move (\d+) from (\d+) to (\d+)/
    );
    return { quantity, from, to };
  });

const followInstruction = (
  instruction: Instruction,
  stacks: Stacks
): Stacks => {
  const { quantity, from, to } = instruction;
  const stackToMove = stacks[from - 1].splice(-quantity);
  stacks[to - 1].push(...stackToMove);
  return stacks;
};

const followInstructions = (
  instructions: Instruction[],
  stacks: Stacks
): Stacks => {
  if (!instructions.length) {
    return stacks;
  } else {
    const newStacks = followInstruction(instructions.shift(), stacks);
    return followInstructions(instructions, newStacks);
  }
};

const part2 = (data = input) => {
  const stacks = parseStacks(data[0]);
  const instructions = parseInstructions(data[1]);
  const endStacks = followInstructions(instructions, stacks);
  return endStacks.map((stack) => (stack.pop() || '')[1]).join('');
};
// console.log('Part 2: ', time(part2));
// 0.7 ms

export default part2;
