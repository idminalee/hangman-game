// Async Await
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json() // Next line isn't going to run until I get parsed data.
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

export { getPuzzle as default }