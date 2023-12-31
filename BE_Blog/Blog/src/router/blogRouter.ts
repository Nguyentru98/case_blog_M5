import {Router} from "express";
import blogController from "../controller/blogController";
import auth from "../middleware/jwt";

const BlogRouter = Router();
// BlogRouter.use(auth)
BlogRouter.get('/:id', blogController.findById)
BlogRouter.get('', blogController.getAll)
BlogRouter.post('', blogController.addBlog)
BlogRouter.post('upload', blogController.addBlog)
BlogRouter.put('/:id', blogController.updateBlog)
BlogRouter.delete('/:id', blogController.deleteBlog)

export default BlogRouter;