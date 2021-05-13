  
//UseCase -> Service -> de la logique
import { SkillRepo } from "../../skillRepo";
import { skillProps} from '../../skillTypes'

export class EditSkillById {
    private skillRepo: SkillRepo;

    constructor(skillRepo: SkillRepo) {
        this.skillRepo = skillRepo
    }

    public async editSkillIdService( id: number,{ name, description }: skillProps) {
        return await this.skillRepo.editSkillByIdRepo(id, {  name, description });
    }
}