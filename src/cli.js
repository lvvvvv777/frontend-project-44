import readlineSync from 'readline-sync'

export const getName = () => {
  console.log('Welcome to the Brain Games!')
  // Добавлен пробел после вопроса
  const name = readlineSync.question('May I have your name? ')
  // Добавлен пробел после запятой
  console.log(`Hello, ${name}!`)
  return name
}
