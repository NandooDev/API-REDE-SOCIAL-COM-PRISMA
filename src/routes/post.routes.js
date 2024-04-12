import { Router } from "express";
import { CreatePostController } from "../modules/posts/createPost/createPostController.js";
import { GetAllPostsController } from "../modules/posts/getAllPosts/getAllPostsController.js";
import { AuthenticateToken } from "../auth/authController.js";

const authenticateToken = new AuthenticateToken(process.env.ACCESS_TOKEN_SECRET);

const createPostController = new CreatePostController();
const getAllPostsController = new GetAllPostsController();

const postRoutes = Router();

postRoutes.post('/create', authenticateToken.authenticate.bind(authenticateToken), createPostController.handle);
postRoutes.get('/', getAllPostsController.handle);

export { postRoutes };