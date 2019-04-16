import { PreloaderBar } from '../Scripts/PreloaderBar';

export class PreloaderScene extends Phaser.Scene {
    private logoPosY: number = 200;
    private preloaderPosY: number = 400;

    public constructor() {
        super({
            key: 'PreloaderScene',
        });
    }

    public preload(): void {
        new PreloaderBar('preloader-bar', this.preloaderPosY, this);
        this.addLogoBtn();
        this.loadAllAssets();
    }

    public create(): void {
        this.scene.start('MainMenuScene');
    }

    private addLogoBtn(): void {
        this.add.image(this.game.canvas.width / 2, this.logoPosY, 'logo');
    }

    private loadAllAssets(): void {
        this.load.image('fullscreen', './dist/Assets/fullscreen.png');

        /*
      Load all assets here
      */

        // just for preloader test
        for (let index = 0; index < 50; index++) {
            this.load.image(('logo' + index) as string, './dist/Assets/logo.png');
        }
    }
}
