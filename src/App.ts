import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import HomeRouter from "./Routers/HomeRouter";
import UserRouter from "./Routers/UserRouter";

class App
{
    public constructor()
    {
        let app = express();
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
        app.use("/users", UserRouter);

        // app.get("/about", (req, res) =>
        // {
        //     res.send("About website");
        // });
        // app.get("/", (req, res) =>
        // {
        //     res.send("Main Page");
        // });
        app.use("/", HomeRouter);

        let port = process.env.PORT || 3000;
        console.log("Server started on port: " + port);
        app.listen(port);
    }
}

new App();
