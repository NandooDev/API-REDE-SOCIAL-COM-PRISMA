import { prisma } from '../../../prisma/client.js';
import { AppError } from '../../../errors/appError.js';

export class RemoveComment {
    async execute({ commentId }) {
        // verificar se comentario existe 
        const commentAlreadyExists = await prisma.comment.findUnique({
            where: {
                id: commentId
            }
        })

        if (!commentAlreadyExists) {
            throw new AppError("Comment does not exist");
        }

        // remover comentario 
        try {
            const deletedComment = await prisma.comment.delete({
              where: {
                id: commentId
              }
            });

            return {
                deletedComment: deletedComment,
                message: "Comment deleted successfully" 
            };
        } catch (error) {
            return { error: error };
        }
    }
}