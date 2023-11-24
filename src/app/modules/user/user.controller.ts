/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
      const {users} = req.body
      const result = await userServices.createStudent(users);
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

  
  export const userControllers={
    createUser,
    getAllUsers
   
  }