import { model, Schema } from 'mongoose';
import { TUser, userMethod, userModel } from './user.interface';

const userSchema = new Schema<TUser,userModel,userMethod>({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: String, enum: ['active', 'inactive'], required: true },
  hobbies: { type: [String], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: {
    type: [
      {
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },




 
});


userSchema.methods.isUserExist= async function(userId :string){
  const existingUser= await User.findOne({userId})
  return existingUser;
}


export const User = model<TUser,userModel>('User', userSchema);
