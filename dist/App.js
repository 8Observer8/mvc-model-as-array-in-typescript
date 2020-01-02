"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var HomeRouter_1 = require("./Routers/HomeRouter");
var UserRouter_1 = require("./Routers/UserRouter");
var App = /** @class */ (function () {
    function App() {
        var app = express();
        app.set("view engine", "hbs");
        app.set("views", path.join(__dirname, "/Views"));
        app.use(bodyParser.urlencoded({ extended: false }));
        // let userRouter = express.Router();
        // userRouter.use("/create", (req, res) =>
        // {
        //     res.send("Add user");
        // });
        // userRouter.use("/", (req, res) =>
        // {
        //     res.send("List of Users");
        // });
        app.use("/users", UserRouter_1.default);
        // app.get("/about", (req, res) =>
        // {
        //     res.send("About website");
        // });
        // app.get("/", (req, res) =>
        // {
        //     res.send("Main Page");
        // });
        app.use("/", HomeRouter_1.default);
        var port = process.env.PORT || 3000;
        console.log("Server started on port: " + port);
        app.listen(port);
    }
    return App;
}());
new App();
//# sourceMappingURL=App.js.map