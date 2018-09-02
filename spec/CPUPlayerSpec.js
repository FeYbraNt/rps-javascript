describe("CPUPlayer", function() {

    var player;

    beforeEach( function() {
        const HAND_CHOICES = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper"
        }
        player = new CPUPlayer(HAND_CHOICES);
    });

    it("has an empty hand on init", function() {
        expect(player.hand).toEqual(null);
    });

    it("plays a random hand", function() {
        spyOn(Math, "random").and.returnValue(0);
        player.takeHand();
        expect(player.hand).toEqual("rock");
    });

});