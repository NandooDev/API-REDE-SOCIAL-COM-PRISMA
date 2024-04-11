import { Router } from 'express';
import { userRoutes } from './user.routes.js';
import { postRoutes } from './post.routes.js';
import { commentRoutes } from './comment.routes.js';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/posts', postRoutes);
routes.use('/comments', commentRoutes);

export { routes };