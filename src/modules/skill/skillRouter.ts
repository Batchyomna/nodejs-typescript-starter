
// Router for the url /skills
import { Router } from 'express'
import { createSkillController } from './useCases/createSkill'
import {getSkillsController} from './useCases/getSkills'
import { getSkillByIdController} from './useCases/getskillById'
import {editSkillByIdController} from './useCases/editSkillById'
import { deleteSkillByIdController } from './useCases/deleteSkill'

const skillRouter: Router = Router();

///api/v1/skills
skillRouter.post('/create-skill', (req, res) => createSkillController.execute(req, res))
skillRouter.get('/all-skills', (req, res) => getSkillsController.execute(req, res))
skillRouter.get('/one-skill', (req, res) => getSkillByIdController.execute(req, res))
skillRouter.put('/edit-skill', (req, res) => editSkillByIdController.execute(req, res))
skillRouter.delete('/delete-skill', (req, res) => deleteSkillByIdController.execute(req, res))


export { skillRouter }