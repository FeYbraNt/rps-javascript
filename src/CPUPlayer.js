function CPUPlayer(handChoices) {
    this.hand = null;
    this.handChoices = handChoices;
}

CPUPlayer.prototype.takeHand = function() {
    var choices = [];
    for (hand in this.handChoices) {
        choices.push(hand);
    }
    var chosenIndex = Math.floor(Math.random() * (choices.length - 0));
    this.hand = choices[chosenIndex];
}