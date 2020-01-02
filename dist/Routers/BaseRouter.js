"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BaseRouter = /** @class */ (function () {
    function BaseRouter() {
        this.router = express_1.Router();
        this.Init();
    }
    Object.defineProperty(BaseRouter.prototype, "Router", {
        get: function () {
            return this.router;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRouter;
}());
exports.default = BaseRouter;
//# sourceMappingURL=BaseRouter.js.map