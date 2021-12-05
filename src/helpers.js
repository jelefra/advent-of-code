const REPETITIONS = 1000;

// filter because IDE sometimes adds trailing newline to input file
const getInput = (path, split = '\n') =>
  require('fs').readFileSync(path, 'utf8').split(split).filter(Boolean);

const runRepeatedly = (func, repetitions) => {
  for (let i = 0; i < repetitions; i++) {
    func();
  }
};

const getCurrentTime = () => new Date().getTime();

const measureExecutionTime = (func, repetitions) => {
  const startTime = getCurrentTime();
  runRepeatedly(func, repetitions);
  const endTime = getCurrentTime();
  return (endTime - startTime) / repetitions;
};

const formatDuration = (ms) => `${ms.toFixed(2)} ms`;

const time = (fn, repetitions = REPETITIONS) =>
  formatDuration(measureExecutionTime(fn, repetitions));

const convertBinaryToDecimal = (binary) => parseInt(binary, 2);

module.exports = { getInput, time, convertBinaryToDecimal };
