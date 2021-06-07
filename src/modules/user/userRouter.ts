
// Router for the url /users
import { Router } from 'express'
import { createUserController } from './useCases/createUser'


const userRouter: Router = Router();

///api/v1/users
userRouter.post('/create-user', (req, res) => createUserController.execute(req, res))


export { userRouter }