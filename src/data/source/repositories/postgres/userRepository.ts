// src/data/source/repositories/postgres/userRepository.ts

import { BaseRepository } from '../baseRepository';
import { User, IUser } from '../../models/postgres/userModel';
import { Optional } from 'sequelize';

class UserRepository extends BaseRepository<IUser> {
    async create(data: Partial<IUser>): Promise<IUser> {
        return await User.create(data as Optional<any, string>);
    }

    async findAll(): Promise<IUser[]> {
        return await User.findAll();
    }

    async findById(id: number): Promise<IUser | null> {
        return await User.findByPk(id);
    }

    async update(id: number, data: Partial<IUser>): Promise<IUser | null> {
        const user = await User.findByPk(id);
        if (user) {
            return await user.update(data);
        }
        return null;
    }

    async delete(id: number): Promise<IUser | null> {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    }
}

export default UserRepository;