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
            res.status(200).send('Employee added successfully');
        } catch (error) {
            res.status(500).send('Error while adding employee');
            console.log('Error while adding => ', error);
        }
    }
}