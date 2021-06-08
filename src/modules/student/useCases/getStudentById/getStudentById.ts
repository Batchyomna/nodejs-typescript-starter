  
//UseCase -> Service -> de la logique
import { StudentRepo } from "../../studentRepo";

export class GetStudentById {
    private studentRepo: StudentRepo;

    constructor(studentRepo: StudentRepo) {
        this.studentRepo = studentRepo
    }

    public async findStudentByIdService(id:number) {
        return await this.studentRepo.getStudentByIdRepo(id);
    }
}