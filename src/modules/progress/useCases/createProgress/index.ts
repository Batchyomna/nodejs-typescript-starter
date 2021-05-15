import { entitiesObject} from '../../../../app/database/typeorm/entities'
import {ProgressRepo} from '../../progressRepo'
import {CreateProgress} from './createProgress'
import { CreateProgressController} from './createProgressController'

//Je construit mon repo avec les entités dont j'ai besoin
const progressRepo = new ProgressRepo(entitiesObject)
const createProgress = new CreateProgress(progressRepo)
const createProgressController = new CreateProgressController(createProgress)

export { createProgress , createProgressController }