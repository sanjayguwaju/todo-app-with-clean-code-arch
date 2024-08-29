import { Request, Response } from 'express';
import { IUserController } from '../interfaces/IUserController';
import UserService from '../services/userService';

class UserController implements IUserController {
    constructor(private userService: UserService) {}

    public async getUsers(req: Request, res: Response): Promise<void> {
        const users = await this.userService.getAllUsers();
        res.json(users);
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const newUser = await this.userService.createUser(req.body);
        res.status(201).json(newUser);
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        const user = await this.userService.getUserById(req.params.id);
        res.json(user);
    }

    public async updateUserById(req: Request, res: Response): Promise<void> {
        const updatedUser = await this.userService.updateUserById(req.params.id, req.body);
        res.json(updatedUser);
    }

    public async deleteUserById(req: Request, res: Response): Promise<void> {
        await this.userService.deleteUserById(req.params.id);
        res.status(204).end();
    }
}

export default UserController;