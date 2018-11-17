var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { PreloaderBar } from "../Scripts/PreloaderBar";
var PreloaderScene = /** @class */ (function (_super) {
    __extends(PreloaderScene, _super);
    function PreloaderScene() {
        var _this = _super.call(this, {
            key: "PreloaderScene",
        }) || this;
        _this.logoPosY = 200;
        _this.preloaderPosY = 400;
        return _this;
    }
    PreloaderScene.prototype.preload = function () {
        new PreloaderBar("preloader-bar", this.preloaderPosY, this);
        this.addLogoBtn();
        this.loadAllAssets();
    };
    PreloaderScene.prototype.create = function () {
        this.scene.start("MainMenuScene");
    };
    PreloaderScene.prototype.addLogoBtn = function () {
        this.add.image(this.game.canvas.width / 2, this.logoPosY, "logo");
    };
    PreloaderScene.prototype.loadAllAssets = function () {
        this.load.image("fullscreen", "./dist/Assets/fullscreen.png");
        /*
        Load all assets here
        */
        // just for preloader test
        for (var index = 0; index < 50; index++) {
            this.load.image("logo" + index, "./dist/Assets/logo.png");
        }
    };
    return PreloaderScene;
}(Phaser.Scene));
export { PreloaderScene };
//# sourceMappingURL=PreloaderScene.js.map