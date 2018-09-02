function Game(handChoices, player1, player2) {
    this.handChoices = handChoices;
    this.player1 = player1;
    this.player2 = player2;
}

Game.prototype.gameResult = function() {
    if (this.player1.hand == this.player2.hand) {
        return "tie";
    } else if (this.handChoices[this.player1.hand].indexOf(this.player2.hand) != -1) {
        return "player 1";
    } else {
        return "player 2";
    }
}