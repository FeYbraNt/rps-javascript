describe("HumanPlayer", function() {
    
    var player;

    beforeEach( function() {
        player = new HumanPlayer();
    });

    it("has an empty hand on init", function() {
        expect(player.hand).toEqual(null);
    });

});