
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';

// const Roles = {
//   Seller : "seller",
//   Buyer :"buyer",

// }


const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    password: { type: String, required: true },
    role: { type: String, required: true, default:"user", enum: [ 'admin','user'] },
    name: { type: String, required: true },
    email: { type: String, required: true ,unique:true},
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.statics.isUserExistsMethod = async function (
  email: string
): Promise<Pick<IUser, 'password'|'email'|'name'|'role'|'_id'> | null> {
  // console.log("hitted isUserExistsMethod");
  const user = await User.findOne(
    { email },
    { email: 1, password: 1, role: 1, _id: 1 }
  );
  return user;
};

UserSchema.statics.isPasswordMatchMethod = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean | null> {
  return await bcrypt.compare(givenPassword, savedPassword);
};



UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(10));
  next();
});

export const User = model<IUser, UserModel>('User', UserSchema);
