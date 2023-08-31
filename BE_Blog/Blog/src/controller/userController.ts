import {Request, Response} from "express";
import UserService from "../service/userService";
import userService from "../service/userService";


class UserController {
    private userService;

    constructor() {
        this.userService = UserService;
    }

    register = async (req: Request, res: Response) => {
        await userService.register(req.body);
        res.status(201).json('Create user success')
    }


    login = async (req: Request, res: Response) => {
        console.log(req.body);
        let resultCheck = await userService.checkUser(req.body);
        res.status(200).json(resultCheck);
    }
}
export default new UserController();