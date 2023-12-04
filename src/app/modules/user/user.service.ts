import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudent = async (userData: TUser) => {
  // const users=await User.create(user)
  // return users;
  const user = new User(userData);
  if (await user.isUserExist(Number(userData.userId))) {
    throw new Error("User already exist");
  }
  const result = await user.save(); //build in instance method

  return result;
};

const getAllUsers = async () => {
  const users = await User.find().select("username fullName age email address");
  return users;
};

const getAsingleUser = async (userId: string) => {
  const user = await User.findOne({ userId }).select("-password");
  if (user == null) {
    throw new Error("User not Found");
  }
  return user;
};

const deleteAUser = async (userId: string) => {
  const user = await User.findOne({ userId });
  if (user == null) {
    throw new Error("User not Found");
  }

  await User.deleteOne({ userId });
};

const updateUser = async (userId: string, userData: TUser) => {
  const user = await User.findOne({ userId });

  if (user == null) {
    throw new Error("User not Found");
  }

  const res = await User.updateMany(
    { userId },
    {
      $set: userData,
    },
    { new: true }
  );

  return res;
};

const totalPriceAndQuantitySpecificUser = async (userId: string) => {
  const user = await User.findOne({ userId });
  if (user == null) {
    throw new Error("User not Found");
  }
  const total = user.orders.reduce(
    (acc, order) => {
      acc.totalProductPrice += order.price * order.quantity;
      acc.totalQuantity += order.quantity;
      return acc;
    },
    { totalProductPrice: 0, totalQuantity: 0 },
  );
  return total.totalProductPrice;
};

const orderShowsInSingleUser = async (userId: string) => {
  const user = await User.findOne({ userId });
  if (user == null) {
    throw new Error("User not Found");
  }

  return user.orders;
};

const AddProductToOrder = async (
  userId: string,
  newOrder: { productName: string; price: number; quantity: number },
): Promise<void> => {
  const user = await User.findOne({ userId });

  if (!user) {
    throw new Error("User not Found");
  }

  if (!user.orders) {
    user.orders = [];
  }

  user.orders.push(newOrder);

  await user.save();
};

export const userServices = {
  createStudent,
  getAllUsers,
  getAsingleUser,
  deleteAUser,
  updateUser,
  totalPriceAndQuantitySpecificUser,
  orderShowsInSingleUser,
  AddProductToOrder,
};
