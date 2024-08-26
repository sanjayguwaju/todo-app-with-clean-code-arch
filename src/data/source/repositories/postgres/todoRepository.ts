import { BaseRepository } from '../baseRepository';
import { Todo } from '../../models/postgres/todoModel';

class TodoRepository extends BaseRepository<Todo> {
    async create(data: Partial<Todo>): Promise<Todo> {
        return await Todo.create(data);
    }

    async findAll(): Promise<Todo[]> {
        return await Todo.findAll();
    }

    async findById(id: number): Promise<Todo | null> {
        return await Todo.findByPk(id);
    }

    async update(id: number, data: Partial<Todo>): Promise<Todo | null> {
        const todo = await Todo.findByPk(id);
        if (todo) {
            return await todo.update(data);
        }
        return null;
    }

    async delete(id: number): Promise<Todo | null> {
        const todo = await Todo.findByPk(id);
        if (todo) {
            await todo.destroy();
            return todo;
        }
        return null;
    }
}

export default TodoRepository;
