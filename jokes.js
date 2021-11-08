// this is our array with the jokes
var jokes = []
jokes[0] = "If you spell Chuck Norris in Scrabble, you win. Forever."
jokes[1] = "Chuck Norris has a mug of nails instead of coffee in the morning."
jokes[2] = "Chuck Norris does not sleep. He waits."

// the Math library generates a random number betreen 0 and 1 (e.g. 0.473856745683)
var randomNumberBetweenZeroAndOne = Math.random()

// we need a random number between 0 and 2, so we multiply the generated number by the length of our array (results in e.g. 1.4353535)
var randomNumberBetweenZeroAndArrayLength = randomNumberBetweenZeroAndOne * jokes.length

// last step: round the number in order to get a clean Integer (e.g. 2)
var randomInteger = Math.floor(randomNumberBetweenZeroAndArrayLength)

// check our results on the console
console.log(randomInteger)
console.log(jokes[randomInteger])

// insert joke into the HTML tree
document.getElementById('joke-paragraph').innerText = jokes[randomInteger]