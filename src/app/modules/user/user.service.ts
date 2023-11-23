import { TUser } from "./user.interface";
import { User } from "./user.model";

import userValidationSchema from "./user.validation";
const createUser= async (userData: TUser): Promise<TUser>=>{

    const validateData= userValidationSchema.parse(userData);

    const result= await User.create(validateData);

    return result;
}

export const userServices={
    createUser
}