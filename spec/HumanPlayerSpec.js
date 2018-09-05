describe("HumanPlayer", function() {
    
    var player;

    beforeEach( function() {
        player = new HumanPlayer();
    });

    it("has an empty hand on init", function() {
        expect(player.hand).toEqual(null);
    });

    it("stores a selected hand when passed a valid string", function() {
        player.takeHand("rock");
        expect(player.hand).toEqual("rock");
    });

});