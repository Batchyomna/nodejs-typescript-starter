  
import { Router, Request, Response } from 'express'
import {skillRouter} from '../../modules/skill/skillRouter'
import { categoryRouter } from '../../modules/category/categoryRouter'
const v1Router: Router = Router()

v1Router.get('/', (_: Request, response: Response) => {
    response.json({ message: 'Hello world !' });
})

v1Router.post('/post-user', (request: Request, response: Response) => {
      console.log(request.body);
    response.json({ firstName:'Yomna', lastName: 'BATCH' });
} )

v1Router.use('/skills', skillRouter)
v1Router.use('/categories', categoryRouter)
export { v1Router }