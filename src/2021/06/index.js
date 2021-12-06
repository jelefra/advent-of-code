// eslint-disable-next-line no-unused-vars
const { getInput, time } = require('../../helpers.js');

const input = getInput('./src/2021/06/input.txt');

const school = input[0].split(',').map(Number);

// Suboptimal (even inoperative) for larger data sets
// See timers
const _ageByNDays = (school, n) => {
  while (n) {
    school = _ageByOneDay(school);
    n--;
  }
  return school;
};

const _ageByOneDay = (school) => {
  const fry = Array(school.filter((daysOld) => daysOld === 0).length).fill(8);
  school = school.map((daysOld) => (daysOld === 0 ? 6 : (daysOld -= 1)));
  return [...school, ...fry];
};

const part1 = () => _ageByNDays(school, 80).length;
// console.log('Part 1: ', time(part1, 100));
// 80 ms

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

module.exports = { part1, part2 };
