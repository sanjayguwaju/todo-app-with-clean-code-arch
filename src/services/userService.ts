// src/services/userService.ts

import { BaseService } from './baseService';
import { IUserService } from '../interfaces/IUserService';
import { IUser } from '../data/source/models/postgres/userModel';
import UserRepository from '../data/source/repositories/postgres/userRepository';

class UserService extends BaseService<IUser> implements IUserService {
    constructor() {
        super(new UserRepository());
    }

    async createUser(userData: Partial<IUser>): Promise<IUser> {
        if (!userData.password) {
            throw new Error('Password is required');
        }
        console.log('Creating user with data:', userData);
        return this.create(userData);
    }

    async getAllUsers(): Promise<IUser[]> {
        return this.findAll();
    }

    async getUserById(id: string): Promise<IUser | null> {
        return this.findById(id);
    }

    async updateUserById(id: string, userData: Partial<IUser>): Promise<IUser | null> {
        return this.update(id, userData);
    }

    async deleteUserById(id: string): Promise<IUser | null> {
        return this.delete(id);
    }
}

export default UserService;