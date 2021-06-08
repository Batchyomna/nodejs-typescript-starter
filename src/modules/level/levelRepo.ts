import {levelProps} from './levelTypes'

 export class LevelRepo {
     private entities : any

     constructor(entities :any){
         this.entities = entities
     }
     public async editConfigLevelRepo(id: number, {number, name}: levelProps){
         const LevelEntity = this.entities.Level
         const levelToChange = await LevelEntity.findOne(id)
         if(number){
            levelToChange.number = number
        }
        if(name){
            levelToChange.name = name
        }
         levelToChange.number = number
         levelToChange.name = name
         return await LevelEntity.save(levelToChange)
     }
     public async createLevelRepo({number , name}: levelProps){
        const LevelEntity = this.entities.Level
        return await LevelEntity.create({number: number , name: name}).save()
     }
     public async getLevelById(id : number){
        const LevelEntity = this.entities.Level
        return await LevelEntity.findOne(id)
     }

 }