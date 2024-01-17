import { UserEntity } from "../entities/userEntity";
import { Request, Response } from "express";
import { userUsecases } from "../usecases/userUsecase";

export class userController {
   

    private readonly userUsecase : userUsecases;
    constructor(userUsecase : userUsecases){
        this.userUsecase = userUsecase;
    }


    async add_user(req: Request, res: Response) {
        try {
            const userData: UserEntity = req.body;
            await this.userUsecase.addUser(userData);
            res.status(200).send('user added successfully');
        } catch (error) {
            res.status(500).send('Error while adding  user');
            console.log('Error while adding => ', error);
        }
    }
    async get_user(req: Request, res: Response) {
        try {
            const { email } = req.body;
            const user  = await this.userUsecase.getUser(email);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).send('Error while fetching  user');
            console.log('Error while adding => ', error);
        }
    }
    async deleteUSer(req: Request, res: Response){
        try{
            const { email } = req.body;
            const user =  await this.userUsecase.deleteUser(email);
            res.status(200).json("success");

        }catch (error) {
         res.status(500).send('Error while deleting');
    }


}
}