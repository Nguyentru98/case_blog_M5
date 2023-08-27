import { User } from "../entity/user";
import {AppDataSource} from "../data-source";
import { Like } from "typeorm";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/jwt";
import bcrypt from 'bcrypt'

class UserService {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(User);
    }
    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.Repository.save(user);
    }

    checkUser = async (user) => {
        let userFind = await this.Repository.findOneBy({username: user.username});
        if (!userFind) {
            return 'User is not exist'
        } else {
            let passWordCompare =   bcrypt.compare(user.password, userFind.password);
            if (passWordCompare) {
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username,
                    role: 'admin'
                }
                return {
                    access_token: jwt.sign(payload, SECRET, {
                        expiresIn: 36000 * 10 * 100
                    }),
                    username: userFind.username,
                    password: userFind.password
                }
            } else {
                return 'Password is wrong'
            }
        }
    }
}
export default new UserService();