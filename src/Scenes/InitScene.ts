export class InitScene extends Phaser.Scene {
    public constructor() {
        super({
            key: 'InitScene',
        });
    }

    public preload(): void {
        this.load.image('preloader-bar', './dist/Assets/preloaderBar.png');
        this.load.image('logo', './dist/Assets/logo.png');
    }

    public create(): void {
        this.scene.start('PreloaderScene');
    }
}
