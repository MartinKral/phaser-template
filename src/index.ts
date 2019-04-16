import "phaser";
import { InitScene } from "./Scenes/InitScene";
import { MainMenuScene } from "./Scenes/MainMenuScene";
import { PreloaderScene } from "./Scenes/PreloaderScene";

const config: GameConfig = {
    // width: 1000,
    // height: 562,
    type: Phaser.AUTO,
    parent: "game",
    scene: [InitScene, PreloaderScene, MainMenuScene],
    scale: {
        width: 1000,
        height: 562,
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

class Game {
    private game: Phaser.Game;

    public constructor() {
        this.game = new Phaser.Game(config);
    }
}

new Game();

// ADD prettier