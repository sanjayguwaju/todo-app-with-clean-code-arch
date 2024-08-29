import { Request, Response } from 'express';

export interface IUserController {
    getUsers(req: Request, res: Response): Promise<void>;
    createUser(req: Request, res: Response): Promise<void>;
    getUserById(req: Request, res: Response): Promise<void>;
    updateUserById(req: Request, res: Response): Promise<void>;
    deleteUserById(req: Request, res: Response): Promise<void>;
}