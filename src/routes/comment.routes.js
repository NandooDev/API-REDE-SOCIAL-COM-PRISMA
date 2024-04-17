import { Router } from "express";
import { GetAllCommentsController } from '../modules/comments/getAllComments/getAllCommentsController.js';
import { CreateCommentController } from "../modules/comments/createComment/createCommentController.js";
import { RemoveCommentController } from "../modules/comments/removeComment/removeCommentController.js";
import { AuthenticateToken } from "../auth/authController.js";

const authenticateToken = new AuthenticateToken(process.env.ACCESS_TOKEN_SECRET);

const createCommentController = new CreateCommentController();
const getAllCommentsController = new GetAllCommentsController()
const removeCommentController = new RemoveCommentController();

const commentRoutes = Router();

commentRoutes.get('/', getAllCommentsController.handle);
commentRoutes.post('/create', authenticateToken.authenticate.bind(authenticateToken), createCommentController.handle);
commentRoutes.delete('/remove', removeCommentController.handle);

export { commentRoutes };