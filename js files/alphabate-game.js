
function keyboardButtonPress(event) {
    const keyPress = event.key.toLowerCase(); // Convert key to lowercase
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    const wrongKeyElement = document.getElementById(keyPress);


    if (keyPress === expectedAlphabet) {
        const currentScoreElement = document.getElementById('current-score');
        const currentScore = parseInt(currentScoreElement.innerText);
        currentScoreElement.innerText = currentScore + 1;

        // Remove orange from the current correct key
        const element = document.getElementById(expectedAlphabet);
        element.classList.remove('bg-orange-400');

        // Remove red from all keys when correct key is pressed
        const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
        alphabetString.split('').forEach(letter => {
            const keyElement = document.getElementById(letter);
            if (keyElement) keyElement.classList.remove('bg-red-700');
        });

        continueGame();
    } else {
        const currentLifeElement = document.getElementById('current-life');
        let currentLife = parseInt(currentLifeElement.innerText);
        currentLifeElement.innerText = --currentLife;

        wrongKeyElement.classList.add('bg-red-700');

        if (currentLife > 0) {
            // Remove orange from the current correct key before continuing
            document.getElementById(expectedAlphabet).classList.remove('bg-orange-400');
            continueGame();
        } else {
            // Game over logic
            document.getElementById('score-section').classList.remove('hidden');
            document.getElementById('play-ground').classList.add('hidden');
            document.getElementById('score-board').innerText = document.getElementById('current-score').innerText;
            document.getElementById(expectedAlphabet).classList.remove('bg-orange-400');
        }
    }
}
//capture keypress
document.addEventListener('keydown', keyboardButtonPress);


function continueGame() {
    //generate a random alphabet
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //generate random index 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    //set alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');

    currentAlphabet.innerText = alphabet;

    //set background color of the key
    const element = document.getElementById(alphabet);
    element.classList.add('bg-orange-400');

}





function play() {
    //hide the home screen.
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');


    //show the play-ground section
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    continueGame();

}

function playAgain(){
    // Reset all keyboard button colors
    const alphabetLetters = 'abcdefghijklmnopqrstuvwxyz';
    alphabetLetters.split('').forEach(letter => {
        document.getElementById(letter).classList.remove('bg-red-700');
    });

    // Reset game stats
    document.getElementById('current-score').innerText = '0';
    document.getElementById('current-life').innerText = '5';

    // Show home screen and hide scoreboard
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('score-section').classList.add('hidden');

}