import { userUsecasesI } from "../interface/userUsecaseI";
import { UserEntity } from "../entities/userEntity";
import { userSchemaI } from "../interface/userSchemaI";
import { Document, Model } from "mongoose";


export class userRepository implements userUsecasesI {
    private readonly User : Model<userSchemaI>;
    constructor(userModel: Model<userSchemaI>) {
        this.User = userModel;
      }


    async addUser(user: UserEntity): Promise<void> {
        const newUser = new this.User(user);
        await newUser.save();
        console.log('user added successfully');
    }

    async getUser(email: string): Promise<UserEntity | null> {
        return await this.User.findOne({email : email});
    }

    async  deleteUser(email: string): Promise<void> {
         await this.User.deleteOne({email : email});
    }
}