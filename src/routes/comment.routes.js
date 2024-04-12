import { Router } from "express";
import { GetAllCommentsController } from '../modules/comments/getAllComments/getAllCommentsController.js';

const getAllCommentsController = new GetAllCommentsController()

const commentRoutes = Router();

commentRoutes.get('/', getAllCommentsController.handle);

export { commentRoutes };