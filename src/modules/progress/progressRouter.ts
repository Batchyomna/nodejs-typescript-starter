// Router
import {Router} from 'express'

import {createProgressController} from './useCases/createProgress'
const progressRouter: Router = Router();
progressRouter.post('/create-progress', (req, res) => createProgressController.execute(req, res))
 export { progressRouter}