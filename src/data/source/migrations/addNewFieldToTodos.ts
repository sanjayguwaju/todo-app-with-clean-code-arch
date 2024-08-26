// Example of a migration file
import { sequelize } from '../../repository/dbConnection';

const addNewFieldToTodos = async () => {
    try {
        // Add logic to alter the database schema or data
        console.log('Migration completed: New field added to todos');
    } catch (err) {
        console.error('Error in migration:', err);
    }
};

addNewFieldToTodos();
