export class UserEntity {
    public readonly id ?: string;
    public readonly name: string;
    public readonly email: string;

    constructor(id: string, name: string, email :string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

