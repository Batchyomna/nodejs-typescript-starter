
// Service

import {ProgressRepo} from '../../ProgressRepo'
// import {progressProps} from '../../progressTypes'

export class CreateProgress {
    private progressRepo : ProgressRepo

    constructor(progressRepo:ProgressRepo){
        this.progressRepo = progressRepo
    }
    public async createProgressService(studentId: number, skillId:number, levelId: number){
        return await this.progressRepo.createProgressRepo(studentId, skillId, levelId)
    }
}
