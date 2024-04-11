import bcrypt from 'bcrypt';
import { AppError } from '../errors/appError.js';

export class CriptografarPasssword {
    async execute({ password }) {
        const saltRounds = 11;

        try {
            // Gerar salto aleatório
            const salt = await bcrypt.genSalt(saltRounds);

            // Criptografar senha
            const passwordCriptografado = await bcrypt.hash(password, salt);

            return passwordCriptografado;
        } catch (error) {
            console.error(error);
            throw new AppError("Error in encryption!")
        }
    }
}