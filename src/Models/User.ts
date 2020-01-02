
export class User
{
    public static users: { name: string, age: number }[] = [];

    public static Add(name: string, age: number): void
    {
        this.users.push({ name: name, age: age });
    }

    public static GetAll(): { name: string, age: number }[]
    {
        return this.users;
    }
}
