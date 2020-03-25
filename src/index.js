import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

let round1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    round1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = round1.statusMessage

    round1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('1')
    round1 = new Hangman(puzzle, 10)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()