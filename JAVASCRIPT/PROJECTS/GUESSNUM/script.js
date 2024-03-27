let randomNumber = parseInt(Math.random()*100 +1);

const submit = document.querySelector('.submitguess');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`PLEASE ENTER A VALID NUMBER
        !`)
    }
    else if(guess<1){
        alert(`PLEASE ENTER A NUMBER MORE THAN 1`)
    }
    else if(guess>100){
        alert(`PLEASE ENTER A NUMBER LESS THAN 100`)
    } else{
        prevGuess.push(guess);
        if(numGuess === 11 ){
            displayGuess(guess);
            displayMessage(`GAME OVER, RANDOM NUMBER WAS ${randomNumber}`);
            endGame();

        } else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}



function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`YOU GUESSED IT RIGHT`)
        endGame();

    }

    else if(guess< randomNumber){
        displayMessage(`NUMBER IS TOO LOW`)

    }
    else if(guess>randomNumber){
        displayMessage(`NUMBER IS TOO HIGH`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess} `;

}

function displayMessage(message){
    loworhigh.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML =`<h2 id="newGame">Start New Game</h2>`; 
    startOver.appendChild(p);
    playGame = false;
    newGame();
    

}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;


       });

}