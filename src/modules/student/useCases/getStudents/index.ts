import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../studentRepo'
import {GetUsers } from './getStudents'
import {GetUsersController } from './getStudentsController'


//Je construit mon repo avec les entités dont j'ai besoin
const userRepo = new UserRepo(entitiesObject)
const getUsers = new GetUsers(userRepo)
const getUsersController = new GetUsersController(getUsers)

export { getUsers, getUsersController }