// src/services/todoService.ts

import { BaseService } from './baseService';
import { ITodoService } from '../interfaces/ITodoService';
import { ITodo } from '../data/source/models/postgres/todoModel';
import TodoRepository from '../data/source/repositories/postgres/todoRepository';

class TodoService extends BaseService<ITodo> implements ITodoService {
    constructor() {
        // Pass an instance of TodoRepository to the BaseService constructor
        super(new TodoRepository());
    }

    async createTodo(todoData: Partial<ITodo>): Promise<ITodo> {
        return this.create(todoData);
    }

    async getAllTodos(): Promise<ITodo[]> {
        return this.findAll();
    }

    async getTodoById(id: string): Promise<ITodo | null> {
        return this.findById(id);
    }

    async updateTodoById(id: string, todoData: Partial<ITodo>): Promise<ITodo | null> {
        return this.update(id, todoData);
    }

    async deleteTodoById(id: string): Promise<ITodo | null> {
        return this.delete(id);
    }

    // Implement any additional methods required by ITodoService here
}

export default TodoService;