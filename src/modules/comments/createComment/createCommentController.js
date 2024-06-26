import { AppError } from "../../../errors/appError.js";
import { CreateComment } from "./createComment.js";

export class CreateCommentController {
    async handle(req, res) {
        try {
            const { content, postId } = req.body;
            const authorId = req.user.id;

            const createComment = new CreateComment();

            const result = await createComment.execute({ content, authorId, postId });

            res.status(201).json(result);
        } catch (error) {
            if (error instanceof AppError) {
                // Trata erros conhecidos
                return res.status(400).json({ message: error.message });
            } else {
                // Trata erros inesperados
                console.error('Error during posting:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        }
    }
}