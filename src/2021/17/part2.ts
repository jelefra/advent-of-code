// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/17/input.txt')[0];

const calculateLaunchMinX = (targetMinX) => {
  let i = 1;
  while ((i * (1 + i)) / 2 <= targetMinX) {
    i++;
  }
  return i;
};

const shoot = (
  { x, y },
  { targetMinX, targetMaxX, targetMinY, targetMaxY }
) => {
  let xVelocity = x;
  let yVelocity = y;
  const startingY = y;

  while (
    ((x > 0 && x <= targetMaxX) || (x < 0 && x >= targetMinX)) &&
    (y >= targetMinY || yVelocity > 0)
  ) {
    if (
      x >= targetMinX &&
      x <= targetMaxX &&
      y >= targetMinY &&
      y <= targetMaxY
    ) {
      return { targetReached: true, maxY: (startingY * (startingY + 1)) / 2 };
    }
    if (xVelocity !== 0 && xVelocity > 0) {
      xVelocity--;
    }
    if (xVelocity !== 0 && xVelocity < 0) {
      xVelocity++;
    }
    yVelocity--;
    x = x + xVelocity;
    y = y + yVelocity;
  }
  return {
    targetReached: false,
    finalX: x,
  };
};

const part2 = (data = input) => {
  const targetMinX = Number(data.split(', ')[0].split('x=')[1].split('..')[0]);
  const targetMaxX = Number(data.split(', ')[0].split('x=')[1].split('..')[1]);
  const targetMinY = Number(data.split(', ')[1].split('y=')[1].split('..')[0]);
  const targetMaxY = Number(data.split(', ')[1].split('y=')[1].split('..')[1]);
  const targetArea = { targetMinX, targetMaxX, targetMinY, targetMaxY };

  const launchMinX = calculateLaunchMinX(targetMinX);
  const successfulLaunches = [];

  for (let x = launchMinX; x <= targetMaxX; x++) {
    let previousFinalX = Infinity;
    let stoppingCondition = false;
    let y = targetMinY;

    while (!stoppingCondition) {
      const { targetReached, finalX } = shoot({ x, y }, targetArea);
      if (targetReached) {
        successfulLaunches.push([x, y]);
      }
      y++;
      stoppingCondition =
        (finalX === previousFinalX &&
          y > 0 &&
          (finalX < targetMinX || finalX > targetMaxX)) ||
        // Arbitrary stop for lack of a better alternative
        y > 150;
      previousFinalX = finalX;
    }
  }
  return successfulLaunches.length;
};
// console.log('Part 2: ', time(part2));
// 0.44 ms

export default part2;
