"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../Models/User");
exports.addUser = function (req, res) {
    res.render("Create.hbs");
};
exports.getUsers = function (req, res) {
    res.render("Users.hbs", {
        users: User_1.User.GetAll()
    });
};
exports.postUser = function (req, res) {
    var userName = req.body.name;
    var userAge = req.body.age;
    User_1.User.Add(userName, userAge);
    res.redirect("/users");
};
//# sourceMappingURL=UserController.js.map