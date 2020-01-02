"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HomeController_1 = require("../Controllers/HomeController");
var BaseRouter_1 = require("./BaseRouter");
var HomeRouter = /** @class */ (function (_super) {
    __extends(HomeRouter, _super);
    function HomeRouter() {
        return _super.call(this) || this;
    }
    HomeRouter.prototype.Init = function () {
        this.router.get("/about", HomeController_1.about);
        this.router.get("/", HomeController_1.index);
    };
    return HomeRouter;
}(BaseRouter_1.default));
exports.HomeRouter = HomeRouter;
var homeRouter = new HomeRouter();
exports.default = homeRouter.Router;
//# sourceMappingURL=HomeRouter.js.map