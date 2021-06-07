import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../studentRepo'
import {GetUserById } from './getUserById'
import {GetUserByIdController } from './getUserByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const userRepo = new UserRepo(entitiesObject)
const getUserById = new GetUserById(userRepo)
const getUserByIdController = new GetUserByIdController(getUserById)

export { getUserById, getUserByIdController }