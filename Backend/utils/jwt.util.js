import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
configDotenv();

export const tokenGenerator = (payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET);
}

export const tokenDecoder = (token)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
}