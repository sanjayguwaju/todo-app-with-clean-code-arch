// src/data/source/repositories/postgres/todoRepository.ts

import { BaseRepository } from '../baseRepository';
import { Todo, ITodo } from '../../models/postgres/todoModel';
import { Optional } from 'sequelize';

class TodoRepository extends BaseRepository<ITodo> {
    async create(data: Partial<ITodo>): Promise<ITodo> {
        return await Todo.create(data as Optional<any, string>);
    }

    async findAll(): Promise<ITodo[]> {
        return await Todo.findAll();
    }

    async findById(id: number): Promise<ITodo | null> {
        return await Todo.findByPk(id);
    }

    async update(id: number, data: Partial<ITodo>): Promise<ITodo | null> {
        const todo = await Todo.findByPk(id);
        if (todo) {
            return await todo.update(data);
        }
        return null;
    }

    async delete(id: number): Promise<ITodo | null> {
        const todo = await Todo.findByPk(id);
        if (todo) {
            await todo.destroy();
            return todo;
        }
        return null;
    }
}

export default TodoRepository;