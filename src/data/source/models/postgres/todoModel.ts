// src/data/source/models/postgres/todoModel.ts

import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/dbConfig';

interface TodoAttributes {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoCreationAttributes extends Optional<TodoAttributes, 'id'> {}

class Todo extends Model<TodoAttributes, TodoCreationAttributes> implements TodoAttributes {
    public id!: number;
    public title!: string;
    public completed!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Todo.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'Todo',
    tableName: 'todos',
    timestamps: true
});

export { Todo };
