import { AppError } from "../../../errors/appError.js";
import { RemovePost } from "./removePost.js";

export class RemovePostController {
    async handle(req, res) {
        try {
            const postId = req.body.postId;

        const removePost = new RemovePost();

        const result = await removePost.execute({ postId });

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