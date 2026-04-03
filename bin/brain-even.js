#!/usr/bin/env node
import readlineSync from 'readline-sync';
const gameName = 'Brain Even';
const rules = 'Answer "yes" or "no"';
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const askQuestion = () => {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};
const runBrainEvenGame = (userName) => {
  console.log(`nWelcome to ${gameName} game, ${userName}!`);
  console.log(rules);
  let correctAnswersCount = 0;
  const maxRounds = 3;
  while (correctAnswersCount < maxRounds) {
    const { userAnswer, correctAnswer } = askQuestion();
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return; // Exit game on first wrong answer
    }
  }
  console.log(`Congratulations, ${userName}! You won ${gameName}!`);
};

const userName = readlineSync.question('May I have your name? ');
runBrainEvenGame(userName);
