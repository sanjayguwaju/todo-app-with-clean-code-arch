import { Request, Response } from 'express';
import { ITodoController } from '../interfaces/ITodoController';
import TodoService from '../services/todoService';

class TodoController implements ITodoController {
    constructor(private todoService: TodoService) {}

    public async getTodos(req: Request, res: Response): Promise<void> {
        const todos = await this.todoService.getAllTodos();
        res.json(todos);
    }

    public async createTodo(req: Request, res: Response): Promise<void> {
        const newTodo = await this.todoService.createTodo(req.body);
        res.status(201).json(newTodo);
    }

    public async getTodoById(req: Request, res: Response): Promise<void> {
        const todo = await this.todoService.getTodoById(req.params.id);
        res.json(todo);
    }

    public async updateTodoById(req: Request, res: Response): Promise<void> {
        const updatedTodo = await this.todoService.updateTodoById(req.params.id, req.body);
        res.json(updatedTodo);
    }

    public async deleteTodoById(req: Request, res: Response): Promise<void> {
        await this.todoService.deleteTodoById(req.params.id);
        res.status(204).end();
    }
}

export default TodoController;
