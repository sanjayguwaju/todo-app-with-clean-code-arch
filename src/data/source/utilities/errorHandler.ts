import { Response } from 'express';

// Centralized error handling utility functions

export const handleDatabaseError = (err: Error): void => {
    console.error('Database error:', err);
};

export const sendErrorResponse = (res: Response, error: Error): void => {
    res.status(500).json({ message: error.message });
};
