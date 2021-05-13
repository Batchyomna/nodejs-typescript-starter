  
//UseCase -> Service -> de la logique
import { SkillRepo } from "../../skillRepo";

export class GetSkillById {
    private skillRepo: SkillRepo;

    constructor(skillRepo: SkillRepo) {
        this.skillRepo = skillRepo
    }

    public async findSkillIdService(id:number) {
        return await this.skillRepo.findSkillById(id);
    }
}