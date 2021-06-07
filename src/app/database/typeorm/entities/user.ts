import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne} from "typeorm";
import {Student} from './student'

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @Column()
    isAdmin: string;
    
    @Column()
    lastLoging: Date;

    @OneToOne(() => Student, student => student.user)
    student: Student

}