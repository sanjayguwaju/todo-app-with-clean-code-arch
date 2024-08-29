import express, { Application } from 'express';
import { configureDatabases } from './data/source/config/dbConfig';
import { errorHandler } from './middleware/errorHandler';
import container from './data/source/ioc/container';
import { setupContainer } from './data/source/ioc/containerSetup';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import todoRoutes from './routes/todoRoutes';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
app.use(express.json());

// Register services and DAOs with the IoC container
setupContainer();

app.use('/api/todos', todoRoutes(container.resolve('TodoController')));
app.use('/api/users', userRoutes(container.resolve('UserController')));

// Add error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Ensure configureDatabases is called
configureDatabases();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});