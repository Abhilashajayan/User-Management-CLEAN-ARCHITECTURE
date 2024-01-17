import { UserEntity } from "../entities/userEntity";

export interface userUsecasesI{
    addUser(user: UserEntity): Promise<void>;
    getUser(email: string): Promise<UserEntity | null>;
    deleteUser(email: string): Promise<void>;
}