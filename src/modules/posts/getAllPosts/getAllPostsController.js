import { GetAllPosts } from "./getAllPosts.js";

export class GetAllPostsController {
    async handle(req, res) {
        try {
            const getAllPosts = new GetAllPosts();

            const result = await getAllPosts.execute();

            return res.status(201).json(result);
        } catch (error) {
            if (error instanceof AppError) {
                // Trata erros conhecidos
                return res.status(401).json({ message: error.message });
            } else {
                // Trata erros inesperados
                console.error('Error during search:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        } 
    }
}