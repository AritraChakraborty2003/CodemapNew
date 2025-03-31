import bcrypt from 'bcrypt';

export const hashingPassword = async (password) =>{
    return await bcrypt.hash(password,10);
}

export const verifyPassword = async (password, hashPassword) => {
    return await bcrypt.compare(password,hashPassword);
}