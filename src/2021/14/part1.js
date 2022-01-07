// eslint-disable-next-line no-unused-vars
import { getInput, time } from '../../helpers.js';

const input = getInput('./src/2021/14/input.txt', '\n\n');

const extractCouples = (polymer) =>
  Array.from(polymer.matchAll(/(?=(\w{2}))/g), (match) => match[1]);

const part1 = (data = input) => {
  const template = data[0];
  const rules = Object.fromEntries(
    data[1].split('\n').map((rule) => rule.split(' -> '))
  );

  const couplesInTemplates = extractCouples(template);
  const uniqueCouplesInTemplate = Array.from(new Set(couplesInTemplates));
  const couples = Object.fromEntries(
    uniqueCouplesInTemplate.map((uniqueCouple) => [
      uniqueCouple,
      couplesInTemplates.filter((couple) => couple === uniqueCouple).length,
    ])
  );

  const elements = {};
  const steps = 10;
  for (let i = 0; i < steps; i++) {
    for (let [couple, count] of Object.entries(couples)) {
      const [elementA, elementB] = couple;

      elements[rules[couple]] = elements[rules[couple]] || 0;
      elements[rules[couple]] += count;

      const newCouple1 = elementA + rules[couple];
      couples[newCouple1] = couples[newCouple1] || 0;
      couples[newCouple1] += count;

      const newCouple2 = rules[couple] + elementB;
      couples[newCouple2] = couples[newCouple2] || 0;
      couples[newCouple2] += count;

      couples[couple] -= count;
    }
  }

  for (let element of template.split('')) {
    elements[element] = elements[element] || 0;
    elements[element]++;
  }

  const sorted = Object.entries(elements).sort((a, b) => a[1] - b[1]);
  return sorted.pop()[1] - sorted.shift()[1];
};
// console.log('Part 1: ', time(part1));
// 0.74 ms

export default part1;
