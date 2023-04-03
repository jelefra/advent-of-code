const REPETITIONS = 1000;

const getInput = (path, split = '\n') =>
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('fs').readFileSync(path, 'utf8').split(split);

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

const formatDuration = (ms) => {
  if (ms > 10000) {
    return `${(ms / 1000).toFixed(2)} s`;
  }
  if (ms > 10) {
    return `${ms.toFixed(0)} ms`;
  }
  if (ms > 0.5) {
    return `${ms.toFixed(2)} ms`;
  }
  return `${ms.toFixed(3)} ms`;
};

const time = (fn, repetitions = REPETITIONS) =>
  formatDuration(measureExecutionTime(fn, repetitions));

const convertBinaryToDecimal = (binary) => parseInt(binary, 2);

export { getInput, time, convertBinaryToDecimal };
