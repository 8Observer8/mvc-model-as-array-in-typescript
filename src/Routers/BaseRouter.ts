import { Router } from "express";

export default abstract class BaseRouter
{
    protected router: Router;

    public constructor()
    {
        this.router = Router();
        this.Init();
    }

    public get Router(): Router
    {
        return this.router;
    }

    protected abstract Init();
}
