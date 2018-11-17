var ForcedButton = /** @class */ (function () {
    function ForcedButton(posX, posY, btnGraphicsName, scene) {
        this.setupButton(posX, posY, btnGraphicsName, scene);
        this.setupGameContainer();
    }
    ForcedButton.prototype.setupButton = function (posX, posY, btnGraphicsName, scene) {
        this.button = scene.add.sprite(posX, posY, btnGraphicsName);
        this.button.setInteractive();
        this.button.on("pointerdown", this.allowClickOnButton, this);
    };
    ForcedButton.prototype.setupGameContainer = function () {
        this.gameContainer = document.getElementById("game");
        this.gameContainer.addEventListener("click", this.tryToClickOnButton.bind(this));
        this.gameContainer.addEventListener("touchend", this.tryToClickOnButton.bind(this));
    };
    ForcedButton.prototype.allowClickOnButton = function () {
        var _this = this;
        this.canClickOnButton = true;
        setTimeout(function () { _this.canClickOnButton = false; }, 1000);
    };
    ForcedButton.prototype.tryToClickOnButton = function () {
        if (this.canClickOnButton) {
            this.clickOnButton();
        }
    };
    return ForcedButton;
}());
export { ForcedButton };
//# sourceMappingURL=ForcedButton.js.map