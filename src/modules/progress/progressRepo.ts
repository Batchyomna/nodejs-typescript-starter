//  import { User } from 'src/app/database/typeorm/entities/user'
// import { progressProps} from './progressType'

export class ProgressRepo{
    private entities : any
    
    constructor(entities: any){
        this.entities = entities
    }

    public async createProgressRepo(studentId :number, skillId: number, levelId: number){
       const ProgressEntity = this.entities.Progress;
        const StudentEntity = this.entities.Student
        const SkillEntity =this.entities.Skill
        const LevelEntity =this.entities.Level
         if (studentId && skillId && levelId){
               const findStudent = await StudentEntity.findOne({where: {id: studentId}})
        const findSkill = await SkillEntity.findOne({where: {id:skillId}})
        const findLevel = await LevelEntity.findOne({where: {id:levelId}})
         
        const createProgress = await ProgressEntity.create({
            student: findStudent, //le nom de column dans l'entities Progress
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