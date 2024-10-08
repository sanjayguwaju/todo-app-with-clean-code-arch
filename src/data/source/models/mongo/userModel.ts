// src/data/source/models/mongo/userModel.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, { timestamps: true });

const User = mongoose.model<IUser>('User', userSchema);

export default User;
