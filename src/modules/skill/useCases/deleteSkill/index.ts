import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import {DeleteSkillById } from './deleteSkillById'
import {DeleteSkillByIdController } from './deleteSkillByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const skillRepo = new SkillRepo(entitiesObject)
const deleteSkillById = new DeleteSkillById(skillRepo)
const deleteSkillByIdController = new DeleteSkillByIdController(deleteSkillById)

export { deleteSkillById, deleteSkillByIdController }