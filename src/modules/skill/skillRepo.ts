import {skillProps} from './skillTypes' 

export class SkillRepo {
    private entities: any

    constructor(entities: any) {
        //Category ,User ,Skill
        this.entities = entities
    }
    public async create(skillProps: skillProps){
        const SkillEntity = this.entities.Skill
        return await SkillEntity.create({name: skillProps.name, description: skillProps.description}).save()
    }
    public async findSkills(){
        const SkillEntity = this.entities.Skill
        return await SkillEntity.find()
    }
    public async findSkillById(id :number){
        const SkillEntity = this.entities.Skill
        return await SkillEntity.findOne(id)
    }
    public async editSkillByIdRepo(id:number, {name, description }: skillProps){
        const SkillEntity = this.entities.Skill
        const skillToEdit =  await SkillEntity.findOne(id)
        if(name){
            skillToEdit.name = name
        }
        if(description){
            skillToEdit.description = description
        }
        return await SkillEntity.save(skillToEdit)

    }
    public async deleteSkillByIdRepo(id :number){
        const SkillEntity = this.entities.Skill
        let skillToDelete= await SkillEntity.findOne(id)
        return await SkillEntity.remove(skillToDelete)
    }
}
