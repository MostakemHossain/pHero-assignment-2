/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { User } from "./user.model";
import { userServices } from "./user.service";
import userValidationSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const { users } = req.body;

    // validation data with zod
    const validateData = userValidationSchema.parse(users);
    const result = await userServices.createStudent(validateData);
    const userId = users.userId;
    const usersData = await User.findOne({ userId }).select("-password");

    res.status(200).json({
      status: "true",
      message: "User created successfully",
      data: usersData,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: "false",
      message: error.message || "Something went wrong",
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      status: "true",
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: "false",
      message: error.message || "Something went wrong",
    });
  }
};

const getsingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await userServices.getAsingleUser(userId);
    res.status(200).json({
      status: "true",
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
const deleteAUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    await userServices.deleteAUser(userId);
    res.status(200).json({
      status: "true",
      message: "User deleted successFully",
      data: null,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userData = req.body;

    await userServices.updateUser(userId, userData);
    const user = await User.findOne({ userId });
    res.status(200).json({
      status: "true",
      message: "User updated successfully!",
      data: user,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const totalPriceAndQuantitySpecificUser = async (
  req: Request,
  res: Response,
) => {
  try {
    const { userId } = req.params;

    const totalSum =
      await userServices.totalPriceAndQuantitySpecificUser(userId);

    res.status(200).json({
      status: "success",
      message: "Total price calculated successfully!",
      data: totalSum,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
const orderShowsInSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const totalSum = await userServices.orderShowsInSingleUser(userId);

    res.status(200).json({
      status: "success",
      message: "Order fetched successfully!",
      data: totalSum,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
const AddProductToOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userData = req.body;

     await userServices.AddProductToOrder(userId, userData);

    res.status(200).json({
      status: "success",
      message: "Order created successfully!",
      data: null,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

export const userControllers = {
  createUser,
  getAllUsers,
  getsingleUser,
  deleteAUser,
  updateUserController,
  totalPriceAndQuantitySpecificUser,
  orderShowsInSingleUser,
  AddProductToOrder,
};
