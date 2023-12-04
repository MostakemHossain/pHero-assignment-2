import express from "express";
import { userControllers } from "./user.controller";
const router = express.Router();

router.post("/api/users", userControllers.createUser);
router.get("/api/users", userControllers.getAllUsers);
router.get("/api/users/:userId", userControllers.getsingleUser);
router.delete("/api/users/:userId", userControllers.deleteAUser);
router.put("/api/users/:userId", userControllers.updateUserController);
router.get(
  "/api/users/:userId/orders/total-price",
  userControllers.totalPriceAndQuantitySpecificUser,
);
router.get("/api/users/:userId/orders", userControllers.orderShowsInSingleUser);
router.put("/api/users/:userId/orders", userControllers.AddProductToOrder);

export const userRoutes = router;
