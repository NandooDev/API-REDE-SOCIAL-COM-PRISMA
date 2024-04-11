import bcrypt from 'bcrypt';

export class VerificarPassword {
    async verificar({ password, passwordCriptografado }) {
        try {
            const match = await bcrypt.compare(password, passwordCriptografado);
            
            if(match) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}