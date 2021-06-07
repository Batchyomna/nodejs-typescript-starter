import {Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne} from "typeorm";
 import {Skill} from './skill'
import {Level} from './level'
import {Student} from './student'

@Entity()
export class Progress extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // date: string;

    @ManyToOne(() => Level, level => level.progresses)
    level: Level

    @ManyToOne(() => Skill, skill => skill.progresses)
    skill: Skill

    @ManyToOne(() => Student, student => student.progresses)
    student: Student
}