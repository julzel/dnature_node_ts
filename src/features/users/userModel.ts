import { Schema, model, Document } from 'mongoose';
import { hashSync, compareSync } from 'bcryptjs';

export enum UserType {
  Client = 'client',
  Provider = 'provider',
  Admin = 'admin',
  Collaborator = 'collaborator',
}

interface IDogProfile {
  name: string;
  breed: string;
  age: number;
  weight: number;
}

export interface IUser extends Document {
  email: string;
  password: string;
  userType: UserType;
  dogProfiles?: IDogProfile[];
  comparePassword: (password: string) => boolean;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: Object.values(UserType),
      required: true,
    },
    dogProfiles: [
      {
        name: {
          type: String,
          required: true,
        },
        breed: {
          type: String,
          required: true,
        },
        age: {
          type: Number,
          required: true,
        },
        weight: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre<IUser>('save', function (next) {
  if (!this.isModified('password')) return next();
  this.password = hashSync(this.password, 10);
  return next();
});

userSchema.methods.comparePassword = function (password: string) {
  return compareSync(password, this.password);
};

const User = model<IUser>('User', userSchema);

export default User;
