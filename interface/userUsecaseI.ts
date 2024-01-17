import { UserEntity } from "../entities/userEntity";

export interface userUsecasesI{
    addUser(user: UserEntity): Promise<void>;
}