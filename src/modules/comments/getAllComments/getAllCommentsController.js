import { GetAllComments } from "./getAllComments.js";

export class GetAllCommentsController {
    async handle(req, res) {
        try {
            const getAllComments = new GetAllComments();

            const result = await getAllComments.execute();

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