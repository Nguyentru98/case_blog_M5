import {Router} from "express";
import userController from "../controller/userController";
import auth from "../middleware/jwt";


const UserRouter = Router();
UserRouter.get('/', userController.findAll);
UserRouter.get('/:id', userController.findById);
UserRouter.put('/:id', userController.update);
UserRouter.post('/login', userController.login);
UserRouter.post('/register', userController.register);


export default UserRouter;