// Service

import {LevelRepo} from '../../levelRepo'
import {levelProps} from '../../levelTypes'

export class CreateLevel {
    private levelRepo : LevelRepo

    constructor(levelRepo:LevelRepo){
        this.levelRepo = levelRepo
    }
    public async createLevelService({number , name}: levelProps){
        return await this.levelRepo.createLevelRepo({number , name})
    }
}
