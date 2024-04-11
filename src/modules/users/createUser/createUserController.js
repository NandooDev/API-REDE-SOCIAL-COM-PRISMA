import { CreateUser } from "./createUser.js";
import { AppError } from "../../../errors/appError.js";

export class CreateUserController {
    async handle(req, res) {
        try {
            const { name, username, email, password } = req.body;

            const createUser = new CreateUser;

            const result = await createUser.execute({ name, username, email, password });

            return res.status(201).json(result);
        } catch (error) {
            if (error instanceof AppError) {
                // Trata erros conhecidos
                return res.status(400).json({ message: error.message });
            } else {
                // Trata erros inesperados
                console.error('Error during register:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        } 
    }
}