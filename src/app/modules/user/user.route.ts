import express from "express";
import { userControllers } from "./user.controller";
const router=express.Router();

router.post('/',userControllers.createUser);
router.get('/',userControllers.getAllUsers);
router.get('/:userId',userControllers.getASingleUser);
router.delete('/:userId',userControllers.deleteAUser);
router.put("/:userId",userControllers.updateUserController);
router.get("/:userId/orders/total-price",userControllers.totalPriceAndQuantitySpecificUser);
router.get("/:userId/orders",userControllers.orderShowsInSingleUser);
router.put('/:userId/orders',userControllers.AddProductToOrder);

export const userRoutes= router;