import { about, index } from '../Controllers/HomeController';
import BaseRouter from './BaseRouter';

export class HomeRouter extends BaseRouter
{
    public constructor()
    {
        super();
    }

    protected Init(): void
    {
        this.router.get("/about", about);
        this.router.get("/", index);
    }
}

const homeRouter = new HomeRouter();

export default homeRouter.Router;
