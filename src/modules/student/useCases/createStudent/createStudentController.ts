import { CreateStudent } from './createStudent'  // service
import { Request, Response } from 'express'
//Controller

export class CreateStudentController {
    private useCase: CreateStudent;

    constructor(createStudent: CreateStudent) {
        this.useCase = createStudent;
    }
      
    public async execute(req: Request, res: Response) {
        const {firstName, lastName } = req.body
        if (!firstName) {
            return res.status(400).json({
                error: {
                    message: 'Your first name is required'
                }
            });
        }

        if (!lastName) {
            return res.status(400).json({
                error: {
                    message: 'Yours last name is required'
                }
            });
        }

        const user = await this.useCase.execute({firstName, lastName });
       return  res.status(200).json(user);
    }
}