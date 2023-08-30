import { Blog } from "../entity/blog";
import {AppDataSource} from "../data-source";
import { Like } from "typeorm";
import {Request} from "express";

class BlogService {
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(Blog);
    }
    
    // async getTraders(req: Request) {
    //     const { date, name, type } = req.query; // data gui len la date, name, type
    //
    //     const query = this.repository.createQueryBuilder('trade'); // tao query bang trade
    //     if (date) { // neu co data date gui len
    //         query.where('date = :date', { date }); // them date vao condition
    //     }
    //     if (name) { // neu co name gui len
    //         query.andWhere('name like :name', { name: `%${name}%` }); // tim kiem gan dung theo name
    //     }
    //
    //     if (type) {
    //         let tradeType = type === 'Revenue' ? 'Revenue' : 'Pay'; // neu type gui len = 1 -> Revenue, nguoc lai type -> Pay
    //         query.andWhere('type = :tradeType', { tradeType });
    //     }
    //
    //     return await query.getMany();
    // }

    getAll = async () => {
        return await this.repository.find({
            relations : {
                user : true
            }
        })
    }
    addBlog = async (blog) => {
        await this.repository.save(blog)
    }
    updateBlog = async ( id, blog) => {
        return await this.repository.update(id, blog)
    }
    deleteBlog = async (id) => {
        return await this.repository.delete(id)
    }
    findById = async (id)=>{
        return await  this.repository.findOne({
            relations : {
                user : true
            },
            where :{
                id : id
            }
        })
    }

}
export default new BlogService();