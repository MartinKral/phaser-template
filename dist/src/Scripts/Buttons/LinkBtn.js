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
var LinkBtn = /** @class */ (function (_super) {
    __extends(LinkBtn, _super);
    function LinkBtn(posX, posY, btnGraphicsName, url, scene) {
        var _this = _super.call(this, posX, posY, btnGraphicsName, scene) || this;
        _this.url = url;
        return _this;
    }
    LinkBtn.prototype.clickOnButton = function () {
        window.open(this.url, "_blank");
    };
    return LinkBtn;
}(ForcedButton));
export { LinkBtn };
//# sourceMappingURL=LinkBtn.js.map