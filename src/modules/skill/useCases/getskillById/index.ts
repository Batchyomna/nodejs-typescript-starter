import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import {GetSkillById } from './getSkillById'
import {GetSkillByIdController } from './getSkillByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const skillRepo = new SkillRepo(entitiesObject)
const getSkillById = new GetSkillById(skillRepo)
const getSkillByIdController = new GetSkillByIdController(getSkillById)

export { getSkillById, getSkillByIdController }