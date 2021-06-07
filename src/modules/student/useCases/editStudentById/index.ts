import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../studentRepo'
import {EditUserById } from './editUserById'
import {EditUserByIdController } from './editUserByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const userRepo = new UserRepo(entitiesObject)
const editUserById = new EditUserById(userRepo)
const editUserByIdController = new EditUserByIdController(editUserById)

export { editUserById, editUserByIdController }