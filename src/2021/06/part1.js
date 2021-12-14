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

module.exports = { part1 };
