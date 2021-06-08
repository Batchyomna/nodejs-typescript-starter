  
//UseCase -> Service -> de la logique
import { StudentRepo } from "../../studentRepo";
import { studentProps} from '../../studentTypes'

export class EditStudentById {
    private studentRepo: StudentRepo;

    constructor(studentRepo:StudentRepo) {
        this.studentRepo = studentRepo
    }

    public async editStudentIdService( id: number,{ firstName, lastName , user}: studentProps) {
        return await this.studentRepo.editStudentByIdRepo(id, { firstName, lastName, user });
    }
}