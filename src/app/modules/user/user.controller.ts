/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { User } from "./user.model";
import { userServices } from "./user.service";
import userValidationSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
    try {
      const {users} = req.body

      // validation data with zod
      const validateData= userValidationSchema.parse(users);
      const result = await userServices.createStudent(validateData);
      res.status(200).json({
        status: 'success',
        message: 'User created successfully',
        data: result,
      })
    
    } catch (error: any) {
      console.log(error)
      res.status(500).json({
        status: 'f',
        message: error.message || 'Something went wrong',
      })
    }
  }

  const getAllUsers = async (req: Request, res: Response) => {
    try {
   
      const result = await userServices.getAllUsers();
      res.status(200).json({
        status: 'success',
        message: 'User created successfully',
        data: result,
      })
    
    } catch (error: any) {
      console.log(error)
      res.status(500).json({
        status: 'false',
        message: error.message || 'Something went wrong',
      })
    }
  }



  const getASingleUser = async (req: Request, res: Response) => {
    try {
      const {userId} = req.params
      
      const result = await userServices.getAsingleUser(userId);
      res.status(200).json({
        status: 'success',
        message: 'User fetched successfully!',
        data: result,
      })
    
    } catch (error: any) {
      console.log(error)
      res.status(500).json({
        "success": false,
    "message": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
      })
    }
  }
  const deleteAUser = async (req: Request, res: Response) => {
    try {
      const {userId} = req.params
      
       await userServices.getAsingleUser(userId);
      res.status(200).json({
        status: 'success',
        message: 'User deleted successFully',
        data: null,
      })
    
    } catch (error: any) {
      console.log(error)
      res.status(500).json({
        "success": false,
    "message": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
      })
    }
  }


  const updateUserController = async (req: Request, res: Response) => {
    try {
      const {userId} = req.params
      const userData=req.body;
     
      
      await userServices.updateUser(userId,userData);
     const user= await User.findOne({userId});
      res.status(200).json({
        status: 'success',
        message: 'User updated successfully!',
        data: user,
      })
    
    } catch (error: any) {
      console.log(error)
      res.status(500).json({
        "success": false,
    "message": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
      })
    }
  }

  const totalPriceAndQuantitySpecificUser= async (req: Request, res: Response) => {
    try {
      const {userId} = req.params

     const totalSum= await userServices.totalPriceAndQuantitySpecificUser(userId);
     
      res.status(200).json({
        status: 'success',
        message: 'Total price calculated successfully!',
        data: totalSum,
      })
    
    } catch (error: any) {
      console.log(error)
      res.status(500).json({
        "success": false,
    "message": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
      })
    }


  }

  



  
  export const userControllers={
    createUser,
    getAllUsers,
    getASingleUser,
    deleteAUser,
    updateUserController,
    totalPriceAndQuantitySpecificUser
   
  }