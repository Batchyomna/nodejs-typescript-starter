import {skillProps} from './skillTypes' 

export class SkillRepo {
    private entities: any

    constructor(entities: any) {
        //Skill, Category
        this.entities = entities
    }
    public async createSkillRepo(skillProps: skillProps){
        const SkillEntity = this.entities.Skill
        const CategoryEntity = this.entities.Category
        const category = await CategoryEntity.findOne({ where : {id: skillProps.category}})

        return await SkillEntity.create({name: skillProps.name, description: skillProps.description, category: category}).save()
    }
    public async findSkills(){
        const SkillEntity = this.entities.Skill
        return await SkillEntity.find()
    }
    public async findSkillById(id :number){
        const SkillEntity = this.entities.Skill
        return await SkillEntity.findOne(id)
    }
    public async editSkillByIdRepo(id:number, {name, description, category }: skillProps){
        const SkillEntity = this.entities.Skill
        const skillToEdit =  await SkillEntity.findOne(id)
        if(name){
            skillToEdit.name = name
        }
        if(description){
            skillToEdit.description = description
        }
        if(category){
            skillToEdit.category = category
        }
        return await SkillEntity.save(skillToEdit)

    }
    public async deleteSkillByIdRepo(id :number){
        const SkillEntity = this.entities.Skill
        let skillToDelete= await SkillEntity.findOne(id)
        return await SkillEntity.remove(skillToDelete)
    }
}
