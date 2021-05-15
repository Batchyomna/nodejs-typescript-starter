// Service

import {LevelRepo} from '../../levelRepo'
import {levelProps} from '../../levelTypes'

export class EditConfigLevel {
    private levelRepo : LevelRepo

    constructor(levelRepo:LevelRepo){
        this.levelRepo = levelRepo
    }
    public async editConfigLevelService(id: number, {number , name}: levelProps){
        return await this.levelRepo.editConfigLevelRepo(id, {number , name})
    }
}
