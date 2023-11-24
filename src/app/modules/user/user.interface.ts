import { Model } from "mongoose";

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: "active" | "inactive";
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Array<{
    productName: string;
    price: number;
    quantity: number;
  }>;
};

export type userMethod = {
  isUserExist(userId: string): Promise<TUser | null>;
};

export type userModel = Model<TUser, Record<string, never>, userMethod>;
