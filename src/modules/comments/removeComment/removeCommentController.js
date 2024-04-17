import { AppError } from "../../../errors/appError.js";
import { RemoveComment } from "./removeComment.js";

export class RemoveCommentController {
    async handle(req, res) {
        try {
            const commentId = req.body.commentId;

        const removeComment = new RemoveComment();

        const result = await removeComment.execute({ commentId });

        res.status(201).json(result);
        } catch (error) {
            if (error instanceof AppError) {
                // Trata erros conhecidos
                return res.status(400).json({ message: error.message });
            } else {
                // Trata erros inesperados
                console.error('Error during removing:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        }
    }
}