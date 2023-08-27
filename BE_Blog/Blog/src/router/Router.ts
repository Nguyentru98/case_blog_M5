
import {Router} from "express";
import BlogRouter from "./blogRouter";
import UserRouter from "./userRouter";


const router = Router();
router.use('/blog', BlogRouter);
router.use('/user', UserRouter);

export default router;