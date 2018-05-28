// Create the state that will contain the whole game
const mainState = {

    // Here we preload the assets
    preload: function() {
    },

    // Here we create the game
    create: function() {
    },

    // Here we update the game 60 times per second
    update: function() {
    },
};

const game = new Phaser.Game(500, 200);
game.state.add('main', mainState);
game.state.start('main');