
// Router for the url /users
import { Router } from 'express'
import { createUserController } from './useCases/createUser'
import {getUsersController} from './useCases/getUsers'
import { getUserByIdController} from './useCases/getUserById'
import {editUserByIdController} from './useCases/editUserById'
import { deleteUserByIdController } from './useCases/deleteUser'

const userRouter: Router = Router();

///api/v1/users
userRouter.post('/create-user', (req, res) => createUserController.execute(req, res))
userRouter.get('/all-users', (req, res) => getUsersController.execute(req, res))
userRouter.get('/one-user', (req, res) => getUserByIdController.execute(req, res))
userRouter.put('/edit-user', (req, res) => editUserByIdController.execute(req, res))
userRouter.delete('/delete-user', (req, res) => deleteUserByIdController.execute(req, res))


export { userRouter }