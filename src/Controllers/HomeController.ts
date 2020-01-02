import * as express from "express";

export let index = (req: express.Request, res: express.Response) =>
{
    res.send("Main Page");
};

export let about = (req: express.Request, res: express.Response) =>
{
    res.send("About this website");
}
