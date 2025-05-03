
//capture keypress
document.addEventListener('keyup', function keyboardButtonPress(){

    
})


function continueGame(){
    //generate a random alphabet
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //generate random index 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    //set alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');

    currentAlphabet.innerText=alphabet;

    //set background color of the key
    const element =  document.getElementById(alphabet);
    element.classList.add('bg-orange-400');

}





function play(){
    //hide the home screen.
    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');


    //show the play-ground section
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    continueGame();

}