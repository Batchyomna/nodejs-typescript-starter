import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import {EditStudentById } from './editStudentById'
import {EditStudentByIdController } from './editStudentByIdController'


//Je construit mon repo avec les entités dont j'ai besoin
const studentRepo = new StudentRepo(entitiesObject)
const editStudentById = new EditStudentById(studentRepo)
const editStudentByIdController = new EditStudentByIdController(editStudentById)

export { editStudentById, editStudentByIdController }