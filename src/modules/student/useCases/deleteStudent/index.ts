import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../studentRepo'
import {DeleteUserById } from './deleteUserById'
import {DeleteUserByIdController } from './deleteUserByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const userRepo = new UserRepo(entitiesObject)
const deleteUserById = new DeleteUserById(userRepo)
const deleteUserByIdController = new DeleteUserByIdController(deleteUserById)

export { deleteUserById, deleteUserByIdController }