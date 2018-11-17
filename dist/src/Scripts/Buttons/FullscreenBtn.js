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
import { ForcedButton } from "./ForcedButton";
var FullscreenBtn = /** @class */ (function (_super) {
    __extends(FullscreenBtn, _super);
    function FullscreenBtn(posX, posY, btnGraphicsName, scene) {
        var _this = _super.call(this, posX, posY, btnGraphicsName, scene) || this;
        _this.canvas = scene.sys.game.canvas;
        _this.fullscreen = scene.sys.game.device.fullscreen;
        return _this;
    }
    FullscreenBtn.prototype.clickOnButton = function () {
        this.canvas[this.fullscreen.request]();
    };
    return FullscreenBtn;
}(ForcedButton));
export { FullscreenBtn };
//# sourceMappingURL=FullscreenBtn.js.map