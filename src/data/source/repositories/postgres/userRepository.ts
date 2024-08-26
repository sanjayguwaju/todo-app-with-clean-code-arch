// src/data/source/repositories/postgres/userRepository.ts

import { BaseRepository } from '../baseRepository';
import { User } from '../../models/postgres/userModel';

class UserRepository extends BaseRepository<User> {
    async create(data: Partial<User>): Promise<User> {
        return await User.create(data);
    }

    async findAll(): Promise<User[]> {
        return await User.findAll();
    }

    async findById(id: number): Promise<User | null> {
        return await User.findByPk(id);
    }

    async update(id: number, data: Partial<User>): Promise<User | null> {
        const user = await User.findByPk(id);
        if (user) {
            return await user.update(data);
        }
        return null;
    }

    async delete(id: number): Promise<User | null> {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    }
}

export default UserRepository;
