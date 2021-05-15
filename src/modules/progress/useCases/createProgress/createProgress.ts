
// Service

import {ProgressRepo} from '../../ProgressRepo'
// import {progressProps} from '../../progressTypes'

export class CreateProgress {
    private progressRepo : ProgressRepo

    constructor(progressRepo:ProgressRepo){
        this.progressRepo = progressRepo
    }
    public async createProgressService(userId: number, skillId:number, levelId: number){
        return await this.progressRepo.createProgressRepo(userId, skillId, levelId)
    }
}
