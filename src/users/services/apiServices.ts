import { getUserByEmail, addUser } from "../dal";
import { User, UserFromClient } from "../../configuration/Userinterface";
import jwt, { JwtPayload } from "jsonwebtoken";

const secretKey = 'akiva';


export const register = async (user: User) => {
    try {
        const users = await getUserByEmail(user.email);
        if (!users) {
            const res = await addUser(user)
            return user
        }
        else {
            return Promise.reject(new Error("user is Already exists"))
        }
    } catch (error: any) {
        return Promise.reject(error);
    }
};

export const getToken = async (user: UserFromClient) => {
    try {
        const usersFromDB = await getUserByEmail(user.email)
        if (!usersFromDB) {
            return Promise.reject(new Error("user is not found"))
        }
        if (usersFromDB.password !== user.password) {
            return Promise.reject(new Error("The password is incorrect!"))
        }
        const token = jwt.sign({ user }, secretKey, { expiresIn: '30d' });
        return token;
    } catch (error) {
        return Promise.reject(error);
    }
};
