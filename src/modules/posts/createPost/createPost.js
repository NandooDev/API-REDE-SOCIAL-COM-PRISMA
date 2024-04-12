import { AuthenticateToken } from "../../../auth/authController.js";
import { AppError } from "../../../errors/appError.js";
import { prisma } from "../../../prisma/client.js";

export class CreatePost {
    async execute({ title, body, authorId }) {
        // verificar o id do usuário que irá fazer o post
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                id: authorId
            }
        })

        if (!userAlreadyExists) {
            throw new AppError("User does not exist")
        }

        // verificar se o title e o body estão vazios ou nulos 
        if (!title || title == "") {
            throw new AppError("Title empty or null")
        }
        
        if (!body || body == "") {
            throw new AppError("Body empty or null")
        }
        
        // criar o post
        const post = await prisma.post.create({
            data: {
                title,
                body,
                authorId
            }
        });

        return post;
    }
}