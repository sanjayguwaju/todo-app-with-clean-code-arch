// src/routes/userRoutes.ts

import { Router } from 'express';
import UserController from '../controllers/userController';

export default function userRoutes(controller: UserController): Router {
    const router = Router();

    router.get('/', (req, res) => controller.getUsers(req, res));
    router.post('/', (req, res) => controller.createUser(req, res));
    router.get('/:id', (req, res) => controller.getUserById(req, res));
    router.put('/:id', (req, res) => controller.updateUserById(req, res));
    router.delete('/:id', (req, res) => controller.deleteUserById(req, res));

    return router;
}