// Create the state that will contain the whole game
window.onload = function() {

    const mainConfig = {
        type: Phaser.AUTO,
        width:  800,
        height: 600,
        scene: {
            preload: mainPreload,
            create:  mainCreate,
            update:  mainUpdate
        }
    };
    const game = new Phaser.Game(mainConfig);
};
