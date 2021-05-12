import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {Skill} from './skill'
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    
    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    desciption: string;

    @OneToMany(()=> Skill , skill => skill.id)
    skill : Skill
}