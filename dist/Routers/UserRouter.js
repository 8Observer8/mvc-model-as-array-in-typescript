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
var BaseRouter_1 = require("./BaseRouter");
var UserController_1 = require("../Controllers/UserController");
var UserRouter = /** @class */ (function (_super) {
    __extends(UserRouter, _super);
    function UserRouter() {
        return _super.call(this) || this;
    }
    UserRouter.prototype.Init = function () {
        this.router.use("/postuser", UserController_1.postUser);
        this.router.use("/create", UserController_1.addUser);
        this.router.use("/", UserController_1.getUsers);
    };
    return UserRouter;
}(BaseRouter_1.default));
exports.UserRouter = UserRouter;
var userRounter = new UserRouter();
exports.default = userRounter.Router;
//# sourceMappingURL=UserRouter.js.map