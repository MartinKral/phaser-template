export class PreloaderBar {
    private scene: Phaser.Scene;

    private posX: number;
    private posY: number;

    private preloaderImage: Phaser.GameObjects.Image;

    private defaultPosX: number;

    private preloaderBorderWidth: number = 10;

    constructor(btnGraphicsName: string, posY: number, scene: Phaser.Scene) {
        this.scene = scene;
        this.fillPositions(posY);
        this.addPreloaderImage(btnGraphicsName);
        this.createPreloaderBar();
        scene.load.on("progress", this.logProgress, this);
    }

    private fillPositions(posY: number) {
        this.posX = this.scene.game.canvas.width / 2;
        this.posY = posY;
    }

    private addPreloaderImage(btnGraphicsName: string) {
        this.preloaderImage = this.scene.add.image(0, 0, btnGraphicsName);

        this.defaultPosX = this.posX - this.preloaderImage.width;
        this.preloaderImage.setPosition(this.defaultPosX, this.posY);
    }

    private createPreloaderBar(): any {
        this.createPreloaderBarBackground();
        this.createPreloaderMask();
      }

      private createPreloaderBarBackground(): any {
        const bgWidth: number = this.preloaderImage.width + this.preloaderBorderWidth;
        const bgHeight: number = this.preloaderImage.height + this.preloaderBorderWidth;

        const bgGraphics = this.scene.add.graphics();
        bgGraphics.fillStyle(0x222222);
        bgGraphics.beginPath();
        bgGraphics.fillRect(this.posX - bgWidth / 2 , this.posY - bgHeight / 2, bgWidth, bgHeight);
        bgGraphics.setDepth(-1);
      }

      private createPreloaderMask(): any {
        const maskShape = this.scene.make.graphics(this.scene.game.config);
        maskShape.fillStyle(0xffffff);
        maskShape.beginPath();

        const adjustedPosX: number = this.posX - this.preloaderImage.width / 2;
        const adjustedPosY: number = this.posY - this.preloaderImage.height / 2;
        maskShape.fillRect(adjustedPosX, adjustedPosY, this.preloaderImage.width, this.preloaderImage.height);

        const mask = maskShape.createGeometryMask();
        this.preloaderImage.setMask(mask);
      }

      private logProgress(progress: number): void {
          this.preloaderImage.x = this.defaultPosX + this.preloaderImage.width * progress;
      }
}
