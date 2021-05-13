import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { SkillRepo } from '../../skillRepo'
import {GetSkills } from './getSkills'
import {GetSkillsController } from './getSkillsController'


//Je construit mon repo avec les entités dont j'ai besoin
const skillRepo = new SkillRepo(entitiesObject)
const getSkills = new GetSkills(skillRepo)
const getSkillsController = new GetSkillsController(getSkills)

export { getSkills, getSkillsController }