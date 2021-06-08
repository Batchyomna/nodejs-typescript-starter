import { GetStudentById } from './getStudentById'
import { Request, Response } from 'express'
//Controller

export class GetStudentByIdController {
    private useCase: GetStudentById;

    constructor(getStudentById: GetStudentById) {
        this.useCase = getStudentById;
    }
      
    public async execute(req: Request, res: Response) {

        const { id } = req.body
        if (!id) {
            return res.status(400).json({
                error: {
                    message: 'Id is required'
                }
            });
        }
        const student = await this.useCase.findStudentByIdService(id);
        return  res.status(200).json(student);
    }
}