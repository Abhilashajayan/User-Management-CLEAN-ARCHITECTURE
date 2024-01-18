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

        this.router.get('/api/getuser', (req: Request, res: Response) => {
            userControllers.get_user(req, res);
        });

        this.router.delete('/api/delete', (req: Request, res: Response) => {
            userControllers.deleteUSer(req, res);
        });

        this.router.post('/api/editUser', (req: Request, res: Response) => {
            userControllers.editUser(req, res);
        });
    }

    
}
export const userRouter = new UserRouter().router;