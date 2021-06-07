import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import {DeleteStudentById } from './deleteStudentById'
import {DeleteStudentByIdController } from './deleteStudentByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const studentRepo = new StudentRepo(entitiesObject)
const deleteStudentById = new DeleteStudentById(studentRepo)
const deleteStudentByIdController = new DeleteStudentByIdController(deleteStudentById)

export { deleteStudentById, deleteStudentByIdController }