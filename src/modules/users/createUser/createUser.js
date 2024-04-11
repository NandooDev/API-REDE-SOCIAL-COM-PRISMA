import { CriptografarPasssword } from '../../../cryptography/criptografarPassword.js';
import { AppError } from '../../../errors/appError.js';
import { prisma } from '../../../prisma/client.js';

export class CreateUser {
    async execute({ name, username, email, password }) {
        // verificar se o usuário existe
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            // erro
            throw new AppError("User already exists");
        };

        // verificar se o username existe
        const usernameAlreadyExists = await prisma.user.findUnique({
            where: {
                username
            }
        });

        if (usernameAlreadyExists) {
            // erro
            throw new AppError("Username already exists");
        };

        // criptografar a senha
        const criptografia = new CriptografarPasssword;

        const passwordCriptografado = await criptografia.execute({ password });

        // criar o usuário
        const user = await prisma.user.create({
            data: {
                name,
                username,
                email, 
                password: passwordCriptografado
            }
        });

        return user;
    }
}