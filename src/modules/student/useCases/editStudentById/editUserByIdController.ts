import { EditUserById } from './editUserById'
import { Request, Response } from 'express'
//Controller qui appelle la service 

export class EditUserByIdController {
    private useCase: EditUserById;

    constructor(editUserById: EditUserById) {
        this.useCase = editUserById;
    }
      
    public async execute(req: Request, res: Response) {

        const { id, firstName, lastName } = req.body
        if (!id) {
            return res.status(400).json({
                error: {
                    message: 'Id is required'
                }
            });
        }
        const user = await this.useCase.editUserIdService(id, {firstName, lastName});
       return  res.status(200).json(user);
    }
}