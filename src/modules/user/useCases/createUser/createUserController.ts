import { CreateUser } from './createUser'
import { Request, Response } from 'express'
//Controller

export class CreateUserController {
    private useCase: CreateUser;

    constructor(createUser: CreateUser) {
        this.useCase = createUser;
    }
      
    public async execute(req: Request, res: Response) {
        const {email, password, isAdmin, lastLoggin } = req.body
        if (!email) {
            return res.status(400).json({
                error: {
                    message: 'Your email is required'
                }
            });
        }

        if (!password) {
            return res.status(400).json({
                error: {
                    message: 'Youu have to enter your password'
                }
            });
        }

        const user = await this.useCase.execute({email, password, isAdmin, lastLoggin });
       return  res.status(200).json(user);
    }
}