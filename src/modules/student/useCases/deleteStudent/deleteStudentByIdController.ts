import { DeleteStudentById } from './deleteStudentById'
import { Request, Response } from 'express'

//Controller qui appelle la service 

export class DeleteStudentByIdController {
    private useCase: DeleteStudentById;

    constructor(deleteStudentById: DeleteStudentById) {
        this.useCase = deleteStudentById;
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
        const student = await this.useCase.deleteStudentByIdService(id);
       return  res.status(200).json(student);
    }
}