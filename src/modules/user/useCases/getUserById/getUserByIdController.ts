import { GetUserById } from './getUserById'
import { Request, Response } from 'express'
//Controller

export class GetUserByIdController {
    private useCase: GetUserById;

    constructor(getUserById: GetUserById) {
        this.useCase = getUserById;
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
        const user = await this.useCase.findUserIdService(id);
        return  res.status(200).json(user);
    }
}