
// Router for the url /students
import { Router } from 'express'
import { createStudentController } from './useCases/createStudent'
import { getStudentByIdController } from './useCases/getStudentById'



const studentRouter: Router = Router();

///api/v1/students
studentRouter.post('/create-student', (req, res) => createStudentController.execute(req, res))
studentRouter.get('/get-student', (req, res) => getStudentByIdController.execute(req, res))



export { studentRouter }