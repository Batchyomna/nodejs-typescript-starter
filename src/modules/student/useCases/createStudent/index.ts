import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { StudentRepo } from '../../studentRepo'
import { CreateStudent} from './createStudent' // service
import { CreateStudentController } from './createStudentController'
import { UserRepo } from '../../../user/userRepo'



//Je construit mon repo avec les entités dont j'ai besoin
const studentRepo = new StudentRepo(entitiesObject) // repo(entities)
const userRepo = new UserRepo(entitiesObject) // repo(entities)
const createStudent = new CreateStudent(studentRepo,userRepo ) // service(instant de Repo)
const createStudentController = new CreateStudentController(createStudent) // controller(instant de service)

export { createStudent, createStudentController }