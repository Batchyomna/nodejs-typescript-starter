
// Router for the url /students
import { Router } from 'express'
import { createStudentController } from './useCases/createStudent'


const studentRouter: Router = Router();

///api/v1/students
studentRouter.post('/create-student', (req, res) => createStudentController.execute(req, res))



export { studentRouter }