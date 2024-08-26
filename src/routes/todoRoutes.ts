// src/routes/todoRoutes.ts

import { Router } from 'express';
import TodoController from '../controllers/todoController';

export default function todoRoutes(controller: TodoController): Router {
    const router = Router();

    router.get('/todos', (req, res) => controller.getTodos(req, res));
    router.post('/todos', (req, res) => controller.createTodo(req, res));
    router.get('/todos/:id', (req, res) => controller.getTodoById(req, res));
    router.put('/todos/:id', (req, res) => controller.updateTodoById(req, res));
    router.delete('/todos/:id', (req, res) => controller.deleteTodoById(req, res));

    return router;
}
