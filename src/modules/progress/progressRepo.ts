//  import { User } from 'src/app/database/typeorm/entities/user'
 import { progressProps} from './progressType'

export class ProgressRepo{
    private entities : any
    
    constructor(entities: any){
        this.entities = entities
    }

    public async createPtrogressRepo(progressProps: progressProps ){
        const ProgressEntity = this.entities.Progress;
    //     const StudentEntity = this.entities.Student
    //     const SkillEntity =this.entities.Skill
    //     const LevelEntity =this.entities.Level
    //            const findStudent = await StudentEntity.findOne({where: {id: studentId}})
    //     const findSkill = await SkillEntity.findOne({where: {id:skillId}})
    //     const findLevel = await LevelEntity.findOne({where: {id:levelId}})
         
       return await ProgressEntity.create(progressProps).save()
        // const progress = await ProgressEntity.findOne(createProgress.id, {
        //     relation: ["user", "skill"]
        // })
        
            
    }
}