  
//UseCase -> Service -> de la logique
import { StudentRepo } from "../../studentRepo";
import { studentProps } from '../../studentTypes'
import {UserRepo} from '../../../user/userRepo'

export class CreateStudent {
    private studentRepo: StudentRepo;
    private userRepo : UserRepo

    constructor(studentRepo: StudentRepo, userRepo: UserRepo) {
        this.studentRepo = studentRepo
        this.userRepo = userRepo
    }

    public async execute(props: studentProps) {
        const userIdAlreadyUsed = await this.studentRepo.testIfUserIdAlreadyUsed(props.user)
        if(userIdAlreadyUsed){
             return {message: "You had used this user id"}
        }else{
            const userInfo = await this.userRepo.findUserById(props.user)
        const student ={
            firstName: props.firstName,
            lastName: props.lastName,
            user: userInfo
        }
        return await this.studentRepo.create(student);
        }
        
    }
}