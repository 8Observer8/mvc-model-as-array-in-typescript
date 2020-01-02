import BaseRouter from "./BaseRouter";
import { addUser, getUsers, postUser } from "../Controllers/UserController";

export class UserRouter extends BaseRouter
{
    public constructor()
    {
        super();
    }

    protected Init()
    {
        this.router.use("/postuser", postUser);
        this.router.use("/create", addUser);
        this.router.use("/", getUsers);
    }   
}

const userRounter = new UserRouter();

export default userRounter.Router;
