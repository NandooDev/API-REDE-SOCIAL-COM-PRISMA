import { Router } from "express";
import { CreateUserController } from "../modules/users/createUser/createUserController.js";
import { GetAllUsersController } from "../modules/users/getAllUsers/getAllUsersController.js";
import { LoginUserController } from "../modules/users/loginUser/loginUserController.js";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const loginUserController = new LoginUserController();

const userRoutes = Router();

userRoutes.post('/create', createUserController.handle);
userRoutes.get('/', getAllUsersController.handle);
userRoutes.post('/login', loginUserController.handle);

export { userRoutes };