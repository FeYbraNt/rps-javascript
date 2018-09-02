const HAND_CHOICES = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

const HUMAN_VS_CPU_BUTTON = document.querySelector("#start-player-computer");
const CPU_VS_CPU_BUTTON = document.querySelector("#start-computer-computer");
const GAME_STARTS = document.querySelector("#game");
const GAME_RESULTS = document.querySelector("#results");
const GAME_WINNER = document.querySelector("#results h2");
const PLAY_AGAIN = document.querySelector("#new-game");

// Consts for human player
const HUMAN_PLAYS_ROCK = document.querySelector("#game-player1 .rock");
const HUMAN_PLAYS_PAPER = document.querySelector("#game-player1 .paper");
const HUMAN_PLAYS_SCISSORS = document.querySelector("#game-player1 .scissors");

var game_mode = '';

HUMAN_VS_CPU_BUTTON.addEventListener('click', function() {
    game_mode = 'human_vs_cpu'; 
    startGame(game_mode);
});

HUMAN_PLAYS_ROCK.addEventListener('click', function() {
    if ((game_mode === 'human_vs_cpu') && (player1.hand === null)) {
        player1.takeHand("rock"); hightlightHand_UI(player1, 1);
        player2.takeHand(); hightlightHand_UI(player2, 2);
        resolveGame(game);
    }
});

HUMAN_PLAYS_SCISSORS.addEventListener('click', function() {
    if ((game_mode === 'human_vs_cpu') && (player1.hand === null)) {
        player1.takeHand("scissors"); hightlightHand_UI(player1, 1);
        player2.takeHand(); hightlightHand_UI(player2, 2);
        resolveGame(game);
    }
});

HUMAN_PLAYS_PAPER.addEventListener('click', function() {
    if ((game_mode === 'human_vs_cpu') && (player1.hand === null)) {
        player1.takeHand("paper"); hightlightHand_UI(player1, 1);
        player2.takeHand(); hightlightHand_UI(player2, 2);
        resolveGame(game);
    }
});

CPU_VS_CPU_BUTTON.addEventListener('click', function() {
    game_mode = 'cpu_vs_cpu'; 
    startGame(game_mode);;
});

PLAY_AGAIN.addEventListener('click', function() {
    startGame(game_mode);
});

function startGame(game_mode) {
    reset_UI();

    player1 = (game_mode === 'cpu_vs_cpu') ? new CPUPlayer(HAND_CHOICES) : new HumanPlayer();
    player2 = new CPUPlayer(HAND_CHOICES);
    game = new Game(HAND_CHOICES, player1, player2);

    GAME_STARTS.style.visibility = "visible";

    if (game_mode === 'cpu_vs_cpu') {
        player1.takeHand(); hightlightHand_UI(player1, 1);
        player2.takeHand(); hightlightHand_UI(player2, 2);
        resolveGame(game);
    }
}

function resolveGame(game) {
    const result = game.gameResult();
    if (result === 'tie') {
        GAME_WINNER.innerHTML = "It's a tie!!";
    } else GAME_WINNER.innerHTML = "The winner is " + result + " !!";

    GAME_RESULTS.style.visibility = "visible";
}

/* UI functions */

function hightlightHand_UI(player, number) {
    document.querySelector("#game-player" + number + " ." + player.hand).style.backgroundColor = "orange";
}

function reset_UI() {
    GAME_RESULTS.style.visibility = "hidden";
    const allHands = document.querySelectorAll(".rock, .scissors, .paper");
    allHands.forEach(function (item) {
        item.style.backgroundColor = "white";
    });
}
