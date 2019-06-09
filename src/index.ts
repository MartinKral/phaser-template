import 'phaser'; // this gets replaced by custom build on production
import { InitScene } from './Scenes/InitScene';
import { MainMenuScene } from './Scenes/MainMenuScene';
import { PreloaderScene } from './Scenes/PreloaderScene';
import { GlobalConstants } from './Scripts/GlobalConstants';

const config: GameConfig = {
    type: Phaser.AUTO,
    parent: 'game',
    scene: [InitScene, PreloaderScene, MainMenuScene],
    scale: {
        width: GlobalConstants.width,
        height: GlobalConstants.height,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

class Game {
    private game: Phaser.Game;

    public constructor() {
        this.game = new Phaser.Game(config);
    }

    public FixScale(): void {
        if (!this.game.scale.isFullscreen) {
            this.game.scale.stopFullscreen();
        }
    }
}

const game = new Game();

document.addEventListener('fullscreenchange', function(): void {
    game.FixScale();
});
