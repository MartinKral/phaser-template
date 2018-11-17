import "phaser";
import { InitScene } from "./Scenes/InitScene";
import { MainMenuScene } from "./Scenes/MainMenuScene";
import { PreloaderScene } from "./Scenes/PreloaderScene";
var config = {
    width: 1000,
    height: 562,
    type: Phaser.AUTO,
    parent: "game",
    scene: [InitScene, PreloaderScene, MainMenuScene],
};
var Game = /** @class */ (function () {
    function Game() {
        this.game = new Phaser.Game(config);
    }
    return Game;
}());
new Game();
//# sourceMappingURL=index.js.map