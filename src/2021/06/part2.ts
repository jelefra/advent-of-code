// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getInput, time } from '../../helpers';

const input = getInput('./src/2021/06/input.txt');

const school = input[0].split(',').map(Number);

const ageByNDays = (school, n) => {
  while (n) {
    school = ageByOneDay(school);
    n--;
  }
  return school;
};

const ageByOneDay = (school) => {
  const fry = school[0];
  school = school.slice(1);
  school[6] += fry;
  school[8] = fry;
  return school;
};

const part2 = () => {
  const schoolByTimer = school.reduce((school, timer) => {
    school[timer]++;
    return school;
  }, Array(9).fill(0));

  return ageByNDays(schoolByTimer, 256).reduce((sum, value) => sum + value);
};
// console.log('Part 2: ', time(part2));
// 0.02 ms

export default part2;
