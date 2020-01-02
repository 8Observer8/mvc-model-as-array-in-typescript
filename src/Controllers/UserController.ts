import { Request, Response } from "express";
import { User } from "../Models/User";

export let addUser = (req: Request, res: Response) =>
{
    res.render("Create.hbs");
};

export let getUsers = (req: Request, res: Response) =>
{
    res.render("Users.hbs", {
        users: User.GetAll()
    });
};

export let postUser = (req: Request, res: Response) =>
{
    const userName = req.body.name;
    const userAge = req.body.age;
    User.Add(userName, userAge);
    res.redirect("/users");
}
