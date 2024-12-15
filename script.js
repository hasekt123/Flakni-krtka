const symbolElement = document.getElementById('symbol');
const scoreElement = document.getElementById('score');
const resetButton = document.getElementById('reset-button');

const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let currentSymbol = '';
let score = 0;
let timer = null;

function showRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    currentSymbol = symbols[randomIndex];
    symbolElement.textContent = currentSymbol;
    startTimer();
}

function updateScore(change) {
    score += change;
    scoreElement.textContent = `Score: ${score}`;
}

function startTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        updateScore(-1);
        showRandomSymbol();
    }, 5000);
}

document.addEventListener('keydown', function (event) {
    const pressedKey = event.key.toUpperCase();

    if (pressedKey === currentSymbol) {
        updateScore(1);
        showRandomSymbol();
    } else {
        updateScore(-1);
    }
});

resetButton.addEventListener('click', function () {
    score = 0; // Reset skóre
    scoreElement.textContent = `Score: ${score}`;
    showRandomSymbol();
});

showRandomSymbol();
