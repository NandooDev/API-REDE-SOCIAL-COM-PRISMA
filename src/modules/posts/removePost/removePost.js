import { prisma } from '../../../prisma/client.js';
import { AppError } from '../../../errors/appError.js';

export class RemovePost {
    async execute({ postId }) {
        // verificar se comentario existe 
        const postAlreadyExists = await prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        if (!postAlreadyExists) {
            throw new AppError("Post does not exist");
        }

        // remover post 
        try {
            const deletedPost = await prisma.post.delete({
              where: {
                id: postId
              }
            });

            return {
                deletedPost: deletedPost,
                message: "Post deleted successfully" 
            };
        } catch (error) {
            return { error: error };
        }
    }
}