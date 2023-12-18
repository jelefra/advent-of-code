/* eslint-disable */
const fs = require('fs');
const { mkdirp } = require('mkdirp');
const chalk = require('chalk');

const [year, day] = process.argv.slice(2);

const success = (message) => console.log(chalk.green(message));
const warn = (message) => console.log(chalk.yellow(message));
const error = (message) => console.log(chalk.red(message));

const part = (n, year, day) =>
  '// eslint-disable-next-line @typescript-eslint/no-unused-vars\n' +
  "import { getInput, time } from '../../helpers';\n" +
  '\n' +
  `const input = getInput(\'./src/${year}/${day}/input.txt\');\n` +
  '\n' +
  `const part${n} = (data = input) => {\n` +
  '  return false;\n' +
  '};\n' +
  `// console.log(\'Part ${n}: \', time(part${n}));\n` +
  '// 0.01 ms\n' +
  '\n' +
  `export default part${n};\n`;

const tests = (year, day) =>
  "import part1 from './part1';\n" +
  "import part2 from './part2';\n" +
  '\n' +
  `describe(\'Advent of Code ${year}\', () => {\n` +
  `  describe(\'day ${parseInt(day)}\', () => {\n` +
  "    fdescribe('part 1', () => {\n" +
  "      it('passes with test input', () => {\n" +
  "        const answer = part1(['Test input']);\n" +
  '        expect(answer).toEqual(true);\n' +
  '      });\n' +
  '\n' +
  "      xit('passes with full input', () => {\n" +
  '        const answer = part1();\n' +
  '        expect(answer).toEqual(true);\n' +
  '      });\n' +
  '    });\n' +
  '\n' +
  "    describe('part 2', () => {\n" +
  "      it('passes with test input', () => {\n" +
  "        const answer = part2(['Test input']);\n" +
  '        expect(answer).toEqual(true);\n' +
  '      });\n' +
  '\n' +
  "      xit('passes with full input', () => {\n" +
  '        const answer = part2();\n' +
  '        expect(answer).toEqual(true);\n' +
  '      });\n' +
  '    });\n' +
  '  });\n' +
  '});\n';

if (
  year.length !== 4 ||
  isNaN(Number(year)) ||
  day.length !== 2 ||
  isNaN(Number(day))
) {
  error('Invalid argument(s). Expected `yarn scaffold yyyy dd`');
  return;
}

if (fs.existsSync(`src/${year}/${day}`)) {
  warn(`Puzzle ${year}/${day} already exists.`);
} else {
  mkdirp.sync(`src/${year}/${day}`);
  fs.writeFileSync(`src/${year}/${day}/input.txt`, '');
  [1, 2].forEach((n) =>
    fs.writeFileSync(`src/${year}/${day}/part${n}.ts`, part(n, year, day))
  );
  fs.writeFileSync(`src/${year}/${day}/tests.spec.ts`, tests(year, day));
  success(`Scaffolded ${year}/${day}`);
}
