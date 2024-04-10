import { Router } from 'express';
import { userRoutes } from './user.routes';
import { postRoutes } from './post.routes';
import { commentRoutes } from './comment.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/posts', postRoutes);
routes.use('/comments', commentRoutes);

export { routes };