import { entitiesObject} from '../../../../app/database/typeorm/entities'
import {ProgressRepo} from '../../progressRepo'
import {SkillRepo} from '../../../skill/skillRepo'
import {LevelRepo} from '../../../level/levelRepo'
import {StudentRepo} from '../../../student/studentRepo'


import {CreateProgress} from './createProgress'
import { CreateProgressController} from './createProgressController'

//Je construit mon repo avec les entités dont j'ai besoin
const progressRepo = new ProgressRepo(entitiesObject)
const studentRepo = new StudentRepo(entitiesObject)
const skillRepo = new SkillRepo(entitiesObject)
const levelRepo = new LevelRepo(entitiesObject)

const createProgress = new CreateProgress(progressRepo, studentRepo, skillRepo, levelRepo )
const createProgressController = new CreateProgressController(createProgress)

export { createProgress , createProgressController }