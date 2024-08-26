import { Request, Response } from 'express';

export interface ITodoController {
    getTodos(req: Request, res: Response): Promise<void>;
    createTodo(req: Request, res: Response): Promise<void>;
    getTodoById(req: Request, res: Response): Promise<void>;
    updateTodoById(req: Request, res: Response): Promise<void>;
    deleteTodoById(req: Request, res: Response): Promise<void>;
}
