import { EditStudentById } from './editStudentById'
import { Request, Response } from 'express'
//Controller qui appelle la service 

export class EditStudentByIdController {
    private useCase: EditStudentById;

    constructor(editStudentById: EditStudentById) {
        this.useCase = editStudentById;
    }
      
    public async execute(req: Request, res: Response) {

        const { id, firstName, lastName, userId } = req.body
        if (!id) {
            return res.status(400).json({
                error: {
                    message: 'Id is required'
                }
            });
        }
        const student = await this.useCase.editStudentIdService(id, {firstName, lastName, userId});
       return  res.status(200).json(student);
    }
}