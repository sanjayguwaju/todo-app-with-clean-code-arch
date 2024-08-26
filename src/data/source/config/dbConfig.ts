import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';

// Set Mongoose strictQuery option
mongoose.set('strictQuery', true);

// MongoDB Configuration and Connection
export const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sanjay:12345@cluster0.sa4sbyc.mongodb.net/todo-app-clean-arch?retryWrites=true&w=majority");
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

// PostgreSQL Configuration and Connection
export const sequelize = new Sequelize('postgres://postgres:test123@localhost:5432/todo-app-clean-arch', {
    dialect: 'postgres',
});

export const connectPostgres = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connected');
    } catch (err) {
        console.error('PostgreSQL connection error:', err);
        process.exit(1);
    }
};

// Function to configure database connections based on environment
export const configureDatabases = async () => {
    const useMongo = process.env.USE_MONGO === 'true';

    if (useMongo) {
        await connectMongoDB();
    } else {
        await connectPostgres();

    }
};
