import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user";




@Entity()
export class Blog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    userId: number;

    @Column({type: "varchar", length: 255})
    title: string;

    @Column({type: "longtext"})
    content: string;

    @Column({type: "date"})
    publishDate: number;

    @ManyToOne(() => User, (user) => user.id)
    user: User;


}
