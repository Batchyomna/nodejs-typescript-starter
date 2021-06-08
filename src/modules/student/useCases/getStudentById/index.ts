import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import {GetStudentById } from './getStudentById'
import {GetStudentByIdController } from './getStudentByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const studentRepo = new StudentRepo(entitiesObject)
const getStudentById = new GetStudentById(studentRepo)
const getStudentByIdController = new GetStudentByIdController(getStudentById)

export { getStudentById, getStudentByIdController }