import jwt from 'jsonwebtoken';
// require("dotenv-safe").config({path: __dirname + '/.env'});

const JWT_CONFIG = {
    expiresIn: 360000,
};

export const genToken = (email: string) => {
    return jwt.sign({ user: email }, process.env.SECRET_KEY || "", JWT_CONFIG);
}

