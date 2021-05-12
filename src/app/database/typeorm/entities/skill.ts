import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Category} from './category'

@Entity()
export class Skill {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    desciption: string;

    @ManyToOne(()=> Category, category => category.id)
    category : Category;

}