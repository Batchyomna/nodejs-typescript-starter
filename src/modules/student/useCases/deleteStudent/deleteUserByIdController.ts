import { DeleteUserById } from './deleteUserById'
import { Request, Response } from 'express'

//Controller qui appelle la service 

export class DeleteUserByIdController {
    private useCase: DeleteUserById;

    constructor(DeleteUserById: DeleteUserById) {
        this.useCase = DeleteUserById;
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
        const user = await this.useCase.deleteUserByIdService(id);
       return  res.status(200).json(user);
    }
}