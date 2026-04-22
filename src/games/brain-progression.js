import runGame from '../index.js'
const description = 'What number is missing in the progression?'
const getRoundData = () => {
  const length = 10
  const start = Math.floor(Math.random() * 50)
  const step = Math.floor(Math.random() * 10) + 1
  const hiddenIndex = Math.floor(Math.random() * length)
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  return [progression.join(' '), correctAnswer]
}
export default () => runGame(description, getRoundData)