import { DeleteSkillById } from './deleteSkillById'
import { Request, Response } from 'express'

//Controller qui appelle la service 

export class DeleteSkillByIdController {
    private useCase: DeleteSkillById;

    constructor(DeleteSkillById: DeleteSkillById) {
        this.useCase = DeleteSkillById;
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
        const skill = await this.useCase.deleteSkillByIdService(id);
       return  res.status(200).json(skill);
    }
}