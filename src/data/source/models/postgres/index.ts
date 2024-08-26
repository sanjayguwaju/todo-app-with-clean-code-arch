// src/data/source/models/postgres/index.ts

import { User } from './userModel';
import { Todo } from './todoModel'; // Import the Todo model

export const initializeModels = () => {
    // Register models here if needed
    // For example, if you have associations, you can define them here
    User.hasMany(Todo, { foreignKey: 'userId' });
    Todo.belongsTo(User, { foreignKey: 'userId' });
};

export { User, Todo };