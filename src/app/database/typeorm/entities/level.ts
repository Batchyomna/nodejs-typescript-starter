import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Level {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @Column()
    name: string;

    @Column()
    isActive: boolean;

}