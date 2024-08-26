// src/interfaces/ITodoService.ts

import { ITodo } from '../data/source/models/mongo/todoModel';

export interface ITodoService {
    createTodo(todoData: Partial<ITodo>): Promise<ITodo>;
    getAllTodos(): Promise<ITodo[]>;
    getTodoById(id: string): Promise<ITodo | null>;
    updateTodoById(id: string, todoData: Partial<ITodo>): Promise<ITodo | null>;
    deleteTodoById(id: string): Promise<ITodo | null>;
}
