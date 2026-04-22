import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 100)
  const num2 = Math.floor(Math.random() * 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))

  return [question, correctAnswer]
}
export default () => runGame(description, getRoundData)
