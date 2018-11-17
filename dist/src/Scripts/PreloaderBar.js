var PreloaderBar = /** @class */ (function () {
    function PreloaderBar(btnGraphicsName, posY, scene) {
        this.preloaderBorderWidth = 10;
        this.scene = scene;
        this.fillPositions(posY);
        this.addPreloaderImage(btnGraphicsName);
        this.createPreloaderBar();
        scene.load.on("progress", this.logProgress, this);
    }
    PreloaderBar.prototype.fillPositions = function (posY) {
        this.posX = this.scene.game.canvas.width / 2;
        this.posY = posY;
    };
    PreloaderBar.prototype.addPreloaderImage = function (btnGraphicsName) {
        this.preloaderImage = this.scene.add.image(0, 0, btnGraphicsName);
        this.defaultPosX = this.posX - this.preloaderImage.width;
        this.preloaderImage.setPosition(this.defaultPosX, this.posY);
    };
    PreloaderBar.prototype.createPreloaderBar = function () {
        this.createPreloaderBarBackground();
        this.createPreloaderMask();
    };
    PreloaderBar.prototype.createPreloaderBarBackground = function () {
        var bgWidth = this.preloaderImage.width + this.preloaderBorderWidth;
        var bgHeight = this.preloaderImage.height + this.preloaderBorderWidth;
        var bgGraphics = this.scene.add.graphics();
        bgGraphics.fillStyle(0x222222);
        bgGraphics.beginPath();
        bgGraphics.fillRect(this.posX - bgWidth / 2, this.posY - bgHeight / 2, bgWidth, bgHeight);
        bgGraphics.setDepth(-1);
    };
    PreloaderBar.prototype.createPreloaderMask = function () {
        var maskShape = this.scene.make.graphics();
        maskShape.fillStyle(0xffffff);
        maskShape.beginPath();
        var adjustedPosX = this.posX - this.preloaderImage.width / 2;
        var adjustedPosY = this.posY - this.preloaderImage.height / 2;
        maskShape.fillRect(adjustedPosX, adjustedPosY, this.preloaderImage.width, this.preloaderImage.height);
        var mask = maskShape.createGeometryMask();
        this.preloaderImage.setMask(mask);
    };
    PreloaderBar.prototype.logProgress = function (progress) {
        this.preloaderImage.x = this.defaultPosX + this.preloaderImage.width * progress;
    };
    return PreloaderBar;
}());
export { PreloaderBar };
//# sourceMappingURL=PreloaderBar.js.map