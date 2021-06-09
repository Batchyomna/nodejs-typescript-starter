import { entitiesObject } from '../../../../app/database/typeorm/entities'
import { UserRepo } from '../../userRepo'
import { LoginUser } from './loginUser'
import { LoginUserController } from './loginUserController'


//Je construit mon repo avec les entités dont j'ai besoin
const userRepo = new UserRepo(entitiesObject)
const loginUser = new LoginUser(userRepo)
const loginUserController = new LoginUserController(loginUser)

export { loginUser, loginUserController }