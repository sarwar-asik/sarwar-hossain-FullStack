/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type IUser = {
  _id?:Types.ObjectId
  password: string;
  role: 'admin' | 'user';
  name: string;
  email: string;
};

// export type UserModel =Model<IUser,Record<string,unknown>>

export type UserModel = {
  isUserExistsMethod(
    email: string
  ): Promise<Pick<IUser, 'password'|'email'|'name'|'role'|'_id'>>;
  isPasswordMatchMethod(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean | null>;
} & Model<IUser>;
