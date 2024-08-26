// src/data/source/models/postgres/todoModel.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/dbConfig';

export interface ITodo extends Model {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export const Todo = sequelize.define<ITodo>('Todo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'todos',
    timestamps: true,
});