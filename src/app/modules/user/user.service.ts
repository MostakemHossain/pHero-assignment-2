import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudent = async(user:TUser)=>{

    const users=await User.create(user)
    return users;

}

const getAllUsers= async()=>{
    const users= await User.find().select('-password') 
    return users;
   
}



export const userServices={
    createStudent,
    getAllUsers
    
}