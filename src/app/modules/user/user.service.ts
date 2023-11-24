import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudent = async(userData:TUser)=>{

    // const users=await User.create(user)
    // return users;
    const user = new User(userData);
    if(await user.isUserExist(userData.userId)){
        throw new Error('User already exist');  
    }
   const result= await user.save();//build in instance method
    return result;

}

const getAllUsers= async()=>{
    const users= await User.find().select('-password') 
    return users;  
}

const getAsingleUser= async(userId:string)=>{
    
    const user= await User.findOne({userId}).select('-password')
    if(user==null){
        throw new Error('User not Found'); 
        
    }
        return user;

    
    
}

const deleteAUser= async(userId:string)=>{
    const user= await User.findOne({userId});
    if(user==null){
        throw new Error('User not Found'); 
    }
    
     await User.deleteOne({userId});
    
}


const updateUser = async (userId: string, userData: TUser) => {
    const user = await User.findOne({ userId });

    if (user == null) {
        throw new Error('User not Found');
    }

    const res = await User.updateMany(
        { userId },
        {
            $set: userData,
        }
    );

    return res;
};
// const updateUser= async (userId: string,userData:TUser): Promise<TUser | null>=>{
//     const result= await User.updateMany(userId,userData,{
//         new: true,
//         runValidators:true,
//     })
//     return result;
// }



export const userServices={
    createStudent,
    getAllUsers,
    getAsingleUser,
    deleteAUser,
    updateUser
    
}