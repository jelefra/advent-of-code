// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/17/input.txt')[0];

const part1 = (data = input) => {
  // After it is shot upwards, the probe will eventually drop
  // It will at some point have a position where x = 0
  // Assuming the target zone can be reached from a position where x = 0:
  // The probe will reach the highest point during a throw when it reaches x = 0 with the fastest velocity
  // The fastest velocity will be achieved when the probe reaches the bottom of the target in one step from x = 0
  // Position of the bottom of the target = -targetMinY
  // We can calculate the max height of the throw by summing the y position deltas of the previous steps (up to 1)
  // The penultimate step has a height of -targetMinY - 1
  // The probe's y velocity changes by 1 every step so we have an arithmetic progression
  // Use the arithmetic progression formula for the calculation
  const targetMinY = Number(data.split(', ')[1].split('y=')[1].split('..')[0]);
  const penultimateDrop = -targetMinY - 1;
  return (penultimateDrop * (penultimateDrop + 1)) / 2;
};
// console.log('Part 1: ', time(part1));
// 0.002 ms

export default part1;
