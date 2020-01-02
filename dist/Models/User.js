"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    User.Add = function (name, age) {
        this.users.push({ name: name, age: age });
    };
    User.GetAll = function () {
        return this.users;
    };
    User.users = [];
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map