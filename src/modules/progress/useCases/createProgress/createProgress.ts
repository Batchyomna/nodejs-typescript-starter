
// Service il faut mettre le logique ici

import {ProgressRepo} from '../../ProgressRepo'
import { SkillRepo} from  '../../../skill/skillRepo'
import { StudentRepo} from  '../../../student/studentRepo'
import { LevelRepo} from  '../../../level/levelRepo'
import { progressProps } from '../../progressType'

export class CreateProgress {
    private progressRepo : ProgressRepo
    private skillRepo : SkillRepo
    private levelRepo : LevelRepo
    private studentRepo : StudentRepo

    constructor(progressRepo:ProgressRepo,  studentRepo : StudentRepo, skillRepo : SkillRepo,  levelRepo : LevelRepo ){
        this.progressRepo = progressRepo
        this.studentRepo = studentRepo
        this.skillRepo = skillRepo
        this.levelRepo = levelRepo
    }
    public async createProgressService(progressProps: progressProps){
      const studentFound = await this.studentRepo.getStudentByIdRepo(progressProps.student) // on met le nom comme il était dans le type alors on fait pareille sur postman
      const skillFound = await this.skillRepo.findSkillById(progressProps.skill)
      const levelFound = await this.levelRepo.getLevelById(progressProps.level)
      return await this.progressRepo.createPtrogressRepo({student: studentFound, skill: skillFound, level: levelFound})
    }
}
