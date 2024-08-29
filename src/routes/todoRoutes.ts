// src/routes/todoRoutes.ts

import { Router } from 'express';
import TodoController from '../controllers/todoController';

export default function todoRoutes(controller: TodoController): Router {
    const router = Router();

    router.get('/', (req, res) => controller.getTodos(req, res));
    router.post('/', (req, res) => controller.createTodo(req, res));
    router.get('/:id', (req, res) => controller.getTodoById(req, res));
    router.put('/:id', (req, res) => controller.updateTodoById(req, res));
    router.delete('/:id', (req, res) => controller.deleteTodoById(req, res));

    return router;
}