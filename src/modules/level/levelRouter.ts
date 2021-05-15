
// Router for the url /levels
import { Router } from 'express'
import { editConfigLevelController } from './useCases/editConfigLevel'
import {createLevelController} from './useCases/createLevel'


const levelRouter: Router = Router();

///api/v1/levels
levelRouter.post('/create-level', (req, res) => createLevelController.execute(req, res))
// levelRouter.get('/all-levels', (req, res) => getLevelsController.execute(req, res))
// levelRouter.get('/one-level', (req, res) => getLevelByIdController.execute(req, res))
levelRouter.put('/edit-level', (req, res) => editConfigLevelController.execute(req, res))
// levelRouter.delete('/delete-level', (req, res) => deleteLevelByIdController.execute(req, res))


export { levelRouter }