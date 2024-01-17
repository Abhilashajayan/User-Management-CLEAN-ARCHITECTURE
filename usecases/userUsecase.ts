import { UserEntity } from "../entities/userEntity";
import { userUsecasesI } from "../interface/userUsecaseI";
import { userRepository } from "../repositories/userRepo";

export class userUsecases implements userUsecasesI{
   constructor(private readonly userRepository: userRepository){}


   async addUser(user: UserEntity): Promise<void> {
    await this.userRepository.addUser(user);
 }

 async getUser(email: string): Promise<UserEntity | null> {
    return await this.userRepository.getUser(email);
 }
  async deleteUser(email: string): Promise<void> {
     return await this.userRepository.deleteUser(email);
 }
}