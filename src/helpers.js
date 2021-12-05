const REPETITIONS = 1000;

// filter because IDE sometimes adds trailing newline to input file
const getInput = (path, split = '\n') =>
  require('fs').readFileSync(path, 'utf8').split(split).filter(Boolean);

const runRepeatedly = (func) => {
  for (let i = 0; i < REPETITIONS; i++) {
    func();
  }
};

const getCurrentTime = () => new Date().getTime();

const measureExecutionTime = (func) => {
  const startTime = getCurrentTime();
  runRepeatedly(func);
  const endTime = getCurrentTime();
  return (endTime - startTime) / REPETITIONS;
};

const formatDuration = (ms) => `${ms.toFixed(2)} ms`;

const time = (fn) => formatDuration(measureExecutionTime(fn));

const convertBinaryToDecimal = (binary) => parseInt(binary, 2);

module.exports = { getInput, time, convertBinaryToDecimal };
