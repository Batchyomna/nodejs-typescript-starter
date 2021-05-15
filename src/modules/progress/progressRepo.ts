//  import { User } from 'src/app/database/typeorm/entities/user'
// import { progressProps} from './progressType'

export class ProgressRepo{
    private entities : any
    
    constructor(entities: any){
        this.entities = entities
    }

    public async createProgressRepo(userId :number, skillId: number, levelId: number){
       const ProgressEntity = this.entities.Progress;
        const UserEntity = this.entities.User
        const SkillEntity =this.entities.Skill
        const LevelEntity =this.entities.Level
         if (userId && skillId && levelId){
               const findUser = await UserEntity.findOne({where: {id: userId}})
        const findSkill = await SkillEntity.findOne({where: {id:skillId}})
        const findLevel = await LevelEntity.findOne({where: {id:levelId}})
         
        const createProgress = await ProgressEntity.create({
            user: findUser, //le nom de column dans l'entities Progress
            skill: findSkill,//le nom de column dans l'entities Progress
            level: findLevel  //le nom de column dans l'entities Progress
        }).save()
        // const progress = await ProgressEntity.findOne(createProgress.id, {
        //     relation: ["user", "skill"]
        // })
        return createProgress
         }else{
             return {err: "Sorry you didn't send the good ids"}
         }
      
    
    
    }
}