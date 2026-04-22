import runGame from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operation: ${op}`);
  }
};

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const op = operations[Math.floor(Math.random() * operations.length)];

  const question = `${num1} ${op} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, op));

  return [question, correctAnswer];
};

export default () => runGame(description, getRoundData);