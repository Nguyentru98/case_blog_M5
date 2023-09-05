import {Request, Response} from "express";
import UserService from "../service/userService";
import userService from "../service/userService";


class UserController {
    private userService;

    constructor() {
        this.userService = UserService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.userService.getAll();
        res.json(listProduct);
    }

    register = async (req: Request, res: Response) => {
        let result = await userService.register(req.body);
        res.json(result);
    }

    login = async (req: Request, res: Response) => {
        console.log(req.body);
        let resultCheck = await userService.checkUser(req.body);
        res.status(200).json({
                message: {
                    token : resultCheck,
                    username :req.body.username},
                success: true,
            });
    }

    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await userService.findById(req.params.id)
        res.json(listClassRoom);
    }

    update = async (req: Request, res: Response) => {
        let result = await this.userService.update(req.params.id, req.body);
        res.json("sửa thành công")
    }

}
export default new UserController();