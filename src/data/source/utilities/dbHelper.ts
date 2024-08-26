// Utility functions related to database operations

export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};
