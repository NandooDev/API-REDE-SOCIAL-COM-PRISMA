import { AppError } from "../../../errors/appError.js";
import { CreatePost } from "./createPost.js";

export class CreatePostController {
    async handle(req, res) {
        try {
            const { title, body } = req.body;
            const authorId = req.user.id;

            const createPost = new CreatePost();

            const result = await createPost.execute({ title, body, authorId });

            return res.status(201).json(result);
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