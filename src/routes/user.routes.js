import { Router } from "express";
import { CreateUserController } from "../modules/users/createUser/createUserController.js";
import { GetAllUsersController } from "../modules/users/getAllUsers/getAllUsersController.js";
import { LoginUserController } from "../modules/users/loginUser/loginUserController.js";
import { AuthenticateToken } from "../auth/authController.js";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const loginUserController = new LoginUserController();
const authenticateToken = new AuthenticateToken(process.env.ACCESS_TOKEN_SECRET);

const userRoutes = Router();

userRoutes.post('/create', createUserController.handle);
userRoutes.get('/', getAllUsersController.handle);
userRoutes.post('/login', loginUserController.handle);
userRoutes.get('/dados-protegidos', authenticateToken.authenticate.bind(authenticateToken), (req, res) => {
    res.json({ mensagem: "Dados protegidos", user: req.user });
})

export { userRoutes };