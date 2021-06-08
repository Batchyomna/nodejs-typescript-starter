import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import {GetStudents } from './getStudents'
import {GetStudentsController } from './getStudentsController'


//Je construit mon repo avec les entités dont j'ai besoin
const studentRepo = new StudentRepo(entitiesObject)
const getStudents = new GetStudents(studentRepo)
const getStudentsController = new GetStudentsController(getStudents)

export { getStudents, getStudentsController }