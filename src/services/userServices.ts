import { validateLoginForm } from '../schemas/loginSchema';
import { errorGenerator } from '../utils/errorGenerator';
import { genToken } from '../auth/tokenService';

export const loginUser = async (email: string, password: string) => {
    const { error } = validateLoginForm({ email, password });
    if (error) throw errorGenerator(400, error.message);

    // Acesso ao banco de dados:
    // const user = await users.findOne({ where: { email, password } });

    // exceção caso o usuário não seja encontrado - Front trata pra fazer o cadastro
    // if (!user) {
    //     throw errorGenerator(404, 'Invalid fields');
    // }

    const token = genToken(email);

    return token;
}