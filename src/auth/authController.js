import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export class AuthenticateToken {
    constructor(secret) {
        this.secret = secret;
    }
    
    async authenticate(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1];

        if (token == null) {
            return res.sendStatus(401);
        }

        jwt.verify(token, this.secret, (err, user) => {
            if (err) return res.sendStatus(403); // token inválido ou expirado

            req.user = user;

            next();
        }) 
    }
}