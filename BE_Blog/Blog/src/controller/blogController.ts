import {request, Request, response, Response} from "express";
import BlogService from "../service/blogService";

class BlogController {
    private BlogService;

    constructor() {
        this.BlogService = BlogService;
    }
    getAll = async (req: Request, res: Response) => {
        let data = await this.BlogService.getAll()
        res.json(data);
    }
    addBlog = async (req: Request, res: Response) => {
        console.log(req.body, 'req.body');
        
        let data = await this.BlogService.addBlog(req.body)
        res.json(data);
    }
    updateBlog = async (req: Request ,res: Response) => {
        console.log(req.body, 'reqqqqqqqqqqqqq');
        
        let data = await this.BlogService.updateBlog(req.params.id, req.body)
        res.json("sua Blog thanh cong");
    }
    deleteBlog = async(req: Request, res: Response) => {
        let data = await this.BlogService.deleteBlog(req.params.id)
        res.json("Xoa Blog thanh cong");
    }
    findById = async(req: Request, res: Response) => {
        let data = await this.BlogService.findById(req.params.id)
        res.json(data);
    }
}
export default new BlogController();