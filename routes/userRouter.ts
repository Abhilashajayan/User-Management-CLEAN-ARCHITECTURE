import { Router, Request, Response } from 'express';
import { userController } from '../controllers/controllers';
import { userUsecases } from '../usecases/userUsecase';
import { userRepository } from '../repositories/userRepo';
import userModel from '../adapters/userDb.schema';

export class UserRouter {
    router = Router();

    constructor(){
        const userRepositorys = new userRepository(userModel);
        const userUsecase = new userUsecases(userRepositorys);
        const userControllers = new userController(userUsecase);


        this.router.post('/api/create', (req: Request, res: Response) => {
            userControllers.add_user(req, res);
        });
    }

    
}
export const userRouter = new UserRouter().router;