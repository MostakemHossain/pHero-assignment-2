import { z } from 'zod';

const addressSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

const orderSchema = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.string(),
  username: z.string().min(1),
  password: z.string().min(1),
  fullName: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  }),
  age: z.number(),
  email: z.string().email(),
  isActive: z.enum(['active', 'inactive']),
  hobbies: z.array(z.string().min(1)),
  address: addressSchema,
  orders: z.array(orderSchema),
  // isDeleted: z.boolean(),
});

export default userValidationSchema;
