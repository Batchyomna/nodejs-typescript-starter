  
import { Router, Request, Response } from 'express'

const v1Router: Router = Router()

v1Router.get('/', (_: Request, response: Response) => {
    response.json({ message: 'Hello world !' });
})

v1Router.post('/post-user', (request: Request, response: Response) => {
      console.log(request.body);
    response.json({ firstName:'Yomna', lastName: 'BATCH' });
} )

export { v1Router }