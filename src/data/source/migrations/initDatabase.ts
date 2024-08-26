// src/data/source/migrations/initDatabase.ts

import { sequelize } from '../config/dbConfig';

const initDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Database synchronization error:', error);
    }
};

initDatabase();
