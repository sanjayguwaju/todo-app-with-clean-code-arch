import TodoController from '../../../controllers/todoController';
import TodoService from '../../../services/todoService';
import UserController from '../../../controllers/userController';
import UserService from '../../../services/userService';
import container from './container';

export const setupContainer = () => {
    const todoService = new TodoService();
    container.register('TodoService', todoService);
    container.register('TodoController', new TodoController(todoService));

    const userService = new UserService();
    container.register('UserService', userService);
    container.register('UserController', new UserController(userService));
};