describe("CPUPlayer", function() {

    var player;

    beforeEach( function() {
        const HAND_CHOICES = {
            "rock": ["scissors", "lizard"],
            "paper": ["rock", "spock"],
            "scissors": ["paper", "lizard"],
            "lizard": ["paper", "spock"],
            "spock": ["scissors", "rock"]
        }
        player = new CPUPlayer(HAND_CHOICES);
    });

    it("has an empty hand on init", function() {
        expect(player.hand).toEqual(null);
    });

    it("has access to the hand choices", function() {
        expect(player.handChoices).toEqual({ "rock": ["scissors", "lizard"], "paper": ["rock", "spock"],
            "scissors": ["paper", "lizard"], "lizard": ["paper", "spock"], "spock": ["scissors", "rock"]  
        });
    });

    it("plays a random hand", function() {
        spyOn(Math, "random").and.returnValue(0);
        player.takeHand();
        expect(player.hand).toEqual("rock");
    });

});