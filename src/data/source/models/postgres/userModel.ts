// src/data/source/models/postgres/userModel.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/dbConfig';

export interface IUser extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const User = sequelize.define<IUser>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Password is required',
            },
            notEmpty: {
                msg: 'Password cannot be empty',
            },
            len: {
                args: [6, 100],
                msg: 'Password should be between 6 and 100 characters',
            },
        },
    },
}, {
    tableName: 'users',
    timestamps: true,
});