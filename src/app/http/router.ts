  
import { Router, Request, Response } from 'express'
import {skillRouter} from '../../modules/skill/skillRouter'
import { categoryRouter } from '../../modules/category/categoryRouter'
import {userRouter} from '../../modules/user/userRouter'
import {studentRouter} from '../../modules/student/studentRouter'
import {levelRouter} from '../../modules/level/levelRouter'
import {progressRouter} from '../../modules/progress/progressRouter'
const v1Router: Router = Router()

v1Router.get('/', (_: Request, response: Response) => {
    response.json({ message: 'Hello world !' });
})

// v1Router.post('/post-user', (request: Request, response: Response) => {
//       console.log(request.body);
//     response.json({ firstName:'Yomna', lastName: 'BATCH' });
// } )
v1Router.use('/progress', progressRouter)
v1Router.use('/users', userRouter)
v1Router.use('/students', studentRouter)
v1Router.use('/skills', skillRouter)
v1Router.use('/categories', categoryRouter)
v1Router.use('/levels', levelRouter)

export { v1Router }