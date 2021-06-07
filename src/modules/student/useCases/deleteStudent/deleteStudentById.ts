  
//UseCase -> Service -> de la logique
import { StudentRepo } from "../../studentRepo";

export class DeleteStudentById {
    private studentRepo: StudentRepo;

    constructor(studentRepo: StudentRepo) {
        this.studentRepo = studentRepo
    }

    public async deleteStudentByIdService(id: number) {
        return await this.studentRepo.deleteStudentByIdRepo(id);
    }
}