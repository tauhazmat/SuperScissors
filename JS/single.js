const choices = ['rock', 'paper', 'scissors'];
const aiChoiceImg = document.getElementById('ai-choice');
const playerChoiceImg = document.getElementById('player-choice');
const resultText = document.getElementById('result-text');

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const aiChoice = getRandomChoice();
    
    // Set images based on choices
    aiChoiceImg.src = `./images/${aiChoice}.png`;
    playerChoiceImg.src = `./images/${playerChoice}.png`;
    aiChoiceImg.alt = aiChoice;
    playerChoiceImg.alt = playerChoice;

    // Determine the result
    let result = '';

    if (playerChoice === aiChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'paper' && aiChoice === 'rock') ||
        (playerChoice === 'scissors' && aiChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    // Update result text
    resultText.textContent = result;
}


function singleBack() {
    window.location.href = "./home.html"
}