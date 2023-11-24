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

const getAsingleUser= async(userId:string)=>{
    const user= await User.findOne({userId}).select('-password')
    return user;
}

const deleteAUser= async(userId:string)=>{
    const result= await User.deleteOne({userId});
    return result;
}



export const userServices={
    createStudent,
    getAllUsers,
    getAsingleUser,
    deleteAUser
    
}