function HumanPlayer() {
    this.hand = null;
}

HumanPlayer.prototype.takeHand = function(hand) {
    this.hand = hand;
}