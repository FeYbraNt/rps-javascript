describe("Game", function() {

    const HAND_CHOICES = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    }

    var game, player1, player2;

    beforeEach( function() {
        playerHuman = new HumanPlayer();
        playerCPU = new CPUPlayer();
        HC_Game = new Game(HAND_CHOICES, playerHuman, playerCPU);
        CC_Game = new Game(HAND_CHOICES, playerCPU, playerCPU);

        // Refactor for later tests based only on game logic
        player1 = playerHuman; player2 = playerCPU;
        game = new Game(HAND_CHOICES, player1, player2);
    });

    it("any game has a hand set on init", function() {
        expect(HC_Game.handChoices).toEqual(HAND_CHOICES);
        expect(CC_Game.handChoices).toEqual(HAND_CHOICES);
    });

    it("Human vs Computer game has a human player and a computer player on init", function() {
        expect(HC_Game.player1).toBe(playerHuman);
        expect(HC_Game.player2).toBe(playerCPU);
    });

    it("Computer vs Computer game has two computer players on init", function() {
        expect(CC_Game.player1).toBe(playerCPU);
        expect(CC_Game.player2).toBe(playerCPU);
    });

    it("game evaluates player 1 as the winner", function() {
        player1.takeHand("rock");
        player2.hand = "scissors";
        expect(game.gameResult()).toEqual("player 1");
    });

    it("game evaluates player 2 as the winner", function() {
        player1.takeHand("rock");
        player2.hand = "paper";
        expect(game.gameResult()).toEqual("player 2");
    });

    it("game evaluates a tie", function() {
        player1.takeHand("rock");
        player2.hand = "rock";
        expect(game.gameResult()).toEqual("tie");
    });

});