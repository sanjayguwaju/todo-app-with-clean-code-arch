import { BaseRepository } from '../baseRepository';
import User, { IUser } from '../../models/mongo/userModel';

class UserRepository extends BaseRepository<IUser> {
    async create(data: Partial<IUser>): Promise<IUser> {
        const user = new User(data);
        return await user.save();
    }

    async findAll(): Promise<IUser[]> {
        return await User.find({});
    }

    async findById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    }

    async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(id);
    }
}

export default UserRepository;
