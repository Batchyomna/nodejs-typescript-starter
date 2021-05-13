import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import {EditSkillById } from './editSkillById'
import {EditSkillByIdController } from './editSkillByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const skillRepo = new SkillRepo(entitiesObject)
const editSkillById = new EditSkillById(skillRepo)
const editSkillByIdController = new EditSkillByIdController(editSkillById)

export { editSkillById, editSkillByIdController }