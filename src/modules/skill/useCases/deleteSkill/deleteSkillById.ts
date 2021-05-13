  
//UseCase -> Service -> de la logique
import { SkillRepo } from "../../skillRepo";

export class DeleteSkillById {
    private skillRepo: SkillRepo;

    constructor(skillRepo: SkillRepo) {
        this.skillRepo = skillRepo
    }

    public async deleteSkillByIdService(id: number) {
        return await this.skillRepo.deleteSkillByIdRepo(id);
    }
}