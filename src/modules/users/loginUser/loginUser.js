import { VerificarPassword } from '../../../cryptography/verificarPassword.js';
import { AppError } from '../../../errors/appError.js';
import { prisma } from '../../../prisma/client.js';
import jwt from 'jsonwebtoken';

export class LoginUser {
    async execute({ email, password }) {
        // verificar se email existe
        const user = await prisma.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                username: true,
                password: true
            }
        });

        if (!user) {
            throw new AppError("Email does not exist")
        };

        // verificar a senha
        const verificarPassword = new VerificarPassword();

        const passwordEhValida = await verificarPassword.verificar({ password, passwordCriptografado: user.password });

        if (!passwordEhValida) {
            throw new AppError("Invalid password");
        }

        // senha confirmada, gerar token de acesso        
        const acessToken = jwt.sign({ id: user.id, username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        return acessToken;
    }
}