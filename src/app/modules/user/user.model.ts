import { Model } from 'mongoose';

export type TUser = {
  userId: string;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: 'active' | 'inactive';
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

export type userModel = Model<TUser>;
