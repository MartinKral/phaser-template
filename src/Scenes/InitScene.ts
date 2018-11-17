export class InitScene extends Phaser.Scene {
    constructor() {
      super({
        key: "InitScene",
      });
    }

    public preload() {
      this.load.image("preloader-bar", "./dist/Assets/preloaderBar.png");
      this.load.image("logo", "./dist/Assets/logo.png");
    }

    public create() {
      this.scene.start("PreloaderScene");
    }
  }
