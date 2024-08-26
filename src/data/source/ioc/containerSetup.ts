import TodoController from '../../../controllers/todoController';
import TodoService from '../../../services/todoService';
import container from './container';

export const setupContainer = () => {
    const todoService = new TodoService();
    container.register('TodoService', todoService);
    container.register('TodoRepository', new TodoController(todoService));
};