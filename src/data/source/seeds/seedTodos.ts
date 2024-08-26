// src/data/source/seeds/seedTodos.ts

import { Todo } from '../models/postgres/todoModel';

const seedTodos = async () => {
    try {
        await Todo.bulkCreate([
            { title: 'Buy groceries', completed: false },
            { title: 'Walk the dog', completed: true },
        ]);
        console.log('Todos seeded');
    } catch (error) {
        console.error('Error seeding todos:', error);
    }
};

seedTodos();
