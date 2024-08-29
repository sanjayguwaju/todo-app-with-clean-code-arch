// src/interfaces/IUserService.ts

import { IUser } from '../data/source/models/postgres/userModel';

export interface IUserService {
    createUser(userData: Partial<IUser>): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    getUserById(id: string): Promise<IUser | null>;
    updateUserById(id: string, userData: Partial<IUser>): Promise<IUser | null>;
    deleteUserById(id: string): Promise<IUser | null>;
}