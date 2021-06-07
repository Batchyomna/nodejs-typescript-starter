import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany, JoinColumn} from "typeorm";
import {User} from './user'
import {Progress} from './progress'


@Entity()
export class Student extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @OneToMany(() => Progress, progress => progress.student)
    progresses: Progress[]

    @OneToOne(() => User, user =>user.student  )
    @JoinColumn()
    user: User

}