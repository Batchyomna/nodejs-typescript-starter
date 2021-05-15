import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { LevelRepo } from '../../levelRepo'
import { EditConfigLevel } from './editConfigLevel'
import { EditConfigLevelController } from './editConfigLevelController'


//Je construit mon repo avec les entités dont j'ai besoin
const levelRepo = new LevelRepo(entitiesObject)
const editConfigLevel = new EditConfigLevel(levelRepo)
const editConfigLevelController = new EditConfigLevelController(editConfigLevel)

export { editConfigLevel, editConfigLevelController }