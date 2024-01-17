import { UserEntity } from "../entities/userEntity";
import { userUsecasesI } from "../interface/userUsecaseI";
import { userRepository } from "../repositories/userRepo";

export class userUsecases implements userUsecasesI{
   constructor(private readonly userRepository: userRepository){}

   
   async addUser(user: UserEntity): Promise<void> {
    await this.userRepository.addUser(user);
 }
}