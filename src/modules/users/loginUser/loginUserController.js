import { LoginUser } from "./loginUser.js";
import { AppError } from "../../../errors/appError.js";

export class LoginUserController {
    async handle(req, res) {    
        try {
            const { email, password } = req.body;

            const loginUser = new LoginUser();
            
            const result = await loginUser.execute({ email, password });

            return res.status(200).json({ accessToken: result });
        } catch (error) {
            if (error instanceof AppError) {
                // Trata erros conhecidos
                return res.status(401).json({ message: error.message });
            } else {
                // Trata erros inesperados
                console.error('Error during login:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        } 
    }
}