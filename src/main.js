const HAND_CHOICES = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["paper", "spock"],
    "spock": ["scissors", "rock"]
}
const GAME_MODES = ["human_vs_cpu", "cpu_vs_cpu"];

GAME_MODES.forEach((game_mode) => {
    const domNode = document.querySelector(`#start-${game_mode}`);
    domNode.addEventListener('click', startGame.bind(null, game_mode));
});

Object.keys(HAND_CHOICES).forEach((hand) => {
    const domNode = document.querySelector(`#game-player1 .${hand}`);
    domNode.addEventListener('click', humanPlaysHand.bind(null, hand));
});

function startGame(game_mode) {
    reset_UI();

    player1 = (game_mode === 'cpu_vs_cpu') ? new CPUPlayer(HAND_CHOICES) : new HumanPlayer();
    player2 = new CPUPlayer(HAND_CHOICES);
    game = new Game(HAND_CHOICES, player1, player2);

    showGame_UI();

    if (game_mode === 'cpu_vs_cpu') {
        player1.takeHand(); hightlightHand_UI(player1, 1);
        player2.takeHand(); hightlightHand_UI(player2, 2);
        resolveGame(game);
    }

    // Prepare repeat game button
    const PLAY_AGAIN = document.querySelector("#new-game");
    PLAY_AGAIN.addEventListener('click', startGame.bind(null, game_mode));
}

function resolveGame(game) {
    const result = game.gameResult();
    showResults_UI(result);
}

function humanPlaysHand(hand) {
    if (player1.hand === null) {
        player1.takeHand(hand); hightlightHand_UI(player1, 1);
        player2.takeHand(); hightlightHand_UI(player2, 2);
        resolveGame(game);
    }
}

/* UI functions */

function showGame_UI() {
    document.querySelector("#game").style.display = "block";
}

const RESULTS_UI = document.querySelector("#results"); // Results & Play again button

function showResults_UI(result) {
    RESULTS_UI.style.display = "block";
    const GAME_WINNER = document.querySelector("#results h2");
    if (result === 'tie') {
        GAME_WINNER.innerHTML = "It's a tie!!";
    } else GAME_WINNER.innerHTML = "The winner is " + result + " !!";
}

function hideResults_UI() {
    RESULTS_UI.style.display = "none";
}

function hightlightHand_UI(player, number) {
    document.querySelector("#game-player" + number + " ." + player.hand).style.backgroundColor = "orange";
}
function reset_UI() {
    hideResults_UI();
    Object.keys(HAND_CHOICES).forEach((hand) => {
        const domNodes = document.querySelectorAll(`.${hand}`);
        domNodes.forEach((item) => item.style.backgroundColor = "white");
    });
}