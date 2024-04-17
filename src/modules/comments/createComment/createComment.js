import { AppError } from '../../../errors/appError.js';
import { prisma } from '../../../prisma/client.js';

export class CreateComment {
    async execute({ content, authorId, postId }) {
        // verificar se o usuario existe 
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                id: authorId
            }
        })

        if (!userAlreadyExists) {
            throw new AppError("User does not exist");
        }

        // verificar se o post existe
        const postAlreadyExists = await prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        if (!postAlreadyExists) {
            throw new AppError("Post does not exist");
        }

        const comment = await prisma.comment.create({
            data: {
                content,
                authorId,
                postId
            }
        })

        return comment;
    }
}