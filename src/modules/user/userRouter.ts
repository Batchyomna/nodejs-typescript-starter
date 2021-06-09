
// Router for the url /users
import { Router } from 'express'
import { createUserController } from './useCases/createUser'
import { loginUserController } from './useCases/login'


const userRouter: Router = Router();

///api/v1/users
userRouter.post('/create-user', (req, res) => createUserController.execute(req, res))
userRouter.post('/authenticate', (req, res) => loginUserController.execute(req, res))


export { userRouter }