/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
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
        status: 'fail',
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
        status: 'fail',
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
        status: 'fail',
        message: error.message || 'Something went wrong',
      })
    }
  }
  const deleteAUser = async (req: Request, res: Response) => {
    try {
      const {userId} = req.params
      
      const result = await userServices.getAsingleUser(userId);
      res.status(200).json({
        status: 'success',
        message: 'User deleted successFully',
        data: result,
      })
    
    } catch (error: any) {
      console.log(error)
      res.status(500).json({
        status: 'fail',
        message: error.message || 'Something went wrong',
      })
    }
  }

  



  
  export const userControllers={
    createUser,
    getAllUsers,
    getASingleUser,
    deleteAUser
   
  }