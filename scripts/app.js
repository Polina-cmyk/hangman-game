
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1 

// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    console.log(game1)
    render()
}

startGame()

document.querySelector('#reset').addEventListener('click', startGame)



// getCountry('US').then(country => console.log(country.name))
//                 .catch(err => console.log(err))


// getPuzzle('3').then(puzzle => console.log(puzzle))
//             .catch(err => console.log(err))

// getCurrentCountry().then(country => console.log(country.name))
//                     .catch(err => console.log(err))


// getLocation().then(location => location.country)
//             .then(data => getCountry(data))
//             .then(data => console.log(data.name))
//             .catch(err => console.log(err))