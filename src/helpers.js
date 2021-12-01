const REPETITIONS = 1000;

const getInput = (path) => require('fs').readFileSync(path, 'utf8').split('\n').map(Number);

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
  return ((endTime - startTime) / REPETITIONS);
};

const formatDuration = ms => `${ms.toFixed(2)} ms`;

const time = (fn) => formatDuration(measureExecutionTime(fn));

module.exports = { getInput, time };
