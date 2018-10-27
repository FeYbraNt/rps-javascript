const HAND_CHOICES = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["paper", "spock"],
    "spock": ["scissors", "rock"]
}
const GAME_MODES = ["human_vs_cpu", "cpu_vs_cpu"];

const GAME_STARTS = document.querySelector("#game");
const GAME_RESULTS = document.querySelector("#results");
const GAME_WINNER = document.querySelector("#results h2");
const PLAY_AGAIN = document.querySelector("#new-game");

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

    GAME_STARTS.style.display = "block";

    if (game_mode === 'cpu_vs_cpu') {
        player1.takeHand(); hightlightHand_UI(player1, 1);
        player2.takeHand(); hightlightHand_UI(player2, 2);
        resolveGame(game);
    }
    PLAY_AGAIN.addEventListener('click', startGame.bind(null, game_mode));
}

function resolveGame(game) {
    const result = game.gameResult();
    if (result === 'tie') {
        GAME_WINNER.innerHTML = "It's a tie!!";
    } else GAME_WINNER.innerHTML = "The winner is " + result + " !!";

    GAME_RESULTS.style.display = "block";
}

function humanPlaysHand(hand) {
    if (player1.hand === null) {
        player1.takeHand(hand); hightlightHand_UI(player1, 1);
        player2.takeHand(); hightlightHand_UI(player2, 2);
        resolveGame(game);
    }
}

/* UI functions */

function hightlightHand_UI(player, number) {
    document.querySelector("#game-player" + number + " ." + player.hand).style.backgroundColor = "orange";
}

function reset_UI() {
    GAME_RESULTS.style.display = "none";
    Object.keys(HAND_CHOICES).forEach((hand) => {
        const domNodes = document.querySelectorAll(`.${hand}`);
        domNodes.forEach((item) => item.style.backgroundColor = "white");
    });
}