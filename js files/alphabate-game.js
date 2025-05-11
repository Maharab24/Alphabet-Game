
function keyboardButtonPress(event) {

    const keyPress = event.key;


    //get screen alphabet

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    //check matched or not
    if (keyPress === expectedAlphabet) {
        //update score

        //1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        //2.increase the score by 1
        const newScore = currentScore + 1;
        //3.show the uppdated score
        const newScoreString = newScore.toString();
        currentScoreElement.innerText = newScoreString;

        //star a new round
        const element = document.getElementById(expectedAlphabet);
        element.classList.remove('bg-orange-400');
        continueGame();
    }
    else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const life = currentLife - 1;

        if (life != 0) {
            const lifeString = life.toString();
            currentLifeElement.innerText = lifeString;
            const element = document.getElementById(expectedAlphabet);
            element.classList.remove('bg-orange-400');
            continueGame();
        }

        if (life === 0) {
            const scoreSection = document.getElementById('score-section');

            scoreSection.classList.remove('hidden');

            const playGroundSection = document.getElementById('play-ground');
            playGroundSection.classList.add('hidden');

            const scoreBoardElement = document.getElementById('score-board');

            scoreBoardElement.innerText= document.getElementById('current-score').innerText;

            const element = document.getElementById(expectedAlphabet);
            element.classList.remove('bg-orange-400');

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
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.remove('hidden');

    const scoreSection = document.getElementById('score-section');

    scoreSection.classList.add('hidden');

    const currentScoreElement = document.getElementById('current-score');
    currentScoreElement.innerText='0';

    const currentLifeElement = document.getElementById('current-life');
    currentLifeElement.innerText = '5';

}