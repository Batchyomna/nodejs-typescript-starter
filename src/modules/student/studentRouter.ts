
// Router for the url /students
import { Router } from 'express'
import { createStudentController } from './useCases/createStudent'
import { getStudentByIdController } from './useCases/getStudentById'
import { deleteStudentByIdController } from './useCases/deleteStudent'




const studentRouter: Router = Router();

///api/v1/students
studentRouter.post('/create-student', (req, res) => createStudentController.execute(req, res))
studentRouter.get('/get-student', (req, res) => getStudentByIdController.execute(req, res))
studentRouter.delete('/delete-student', (req, res) => deleteStudentByIdController.execute(req, res))



export { studentRouter }