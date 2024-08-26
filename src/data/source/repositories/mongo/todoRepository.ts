import { BaseRepository } from '../baseRepository';
import Todo, { ITodo } from '../../models/mongo/todoModel';

class TodoRepository extends BaseRepository<ITodo> {
    async create(data: Partial<ITodo>): Promise<ITodo> {
        const todo = new Todo(data);
        return await todo.save();
    }

    async findAll(): Promise<ITodo[]> {
        return await Todo.find({});
    }

    async findById(id: string): Promise<ITodo | null> {
        return await Todo.findById(id);
    }

    async update(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
        return await Todo.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<ITodo | null> {
        return await Todo.findByIdAndDelete(id);
    }
}

export default TodoRepository;
