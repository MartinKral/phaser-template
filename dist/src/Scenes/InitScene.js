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
var InitScene = /** @class */ (function (_super) {
    __extends(InitScene, _super);
    function InitScene() {
        return _super.call(this, {
            key: "InitScene",
        }) || this;
    }
    InitScene.prototype.preload = function () {
        this.load.image("preloader-bar", "./dist/Assets/preloaderBar.png");
        this.load.image("logo", "./dist/Assets/logo.png");
    };
    InitScene.prototype.create = function () {
        this.scene.start("PreloaderScene");
    };
    return InitScene;
}(Phaser.Scene));
export { InitScene };
//# sourceMappingURL=InitScene.js.map