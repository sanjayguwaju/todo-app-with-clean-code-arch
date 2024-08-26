// src/data/source/models/postgres/userModel.ts

import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/dbConfig'; // Ensure this path is correct

interface UserAttributes {
    id: number;
    name: string;
    email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize, // Ensure the sequelize instance is passed here
    modelName: 'User',
    tableName: 'users',
    timestamps: true
});

export { User };