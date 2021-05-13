import { GetSkillById } from './getSkillById'
import { Request, Response } from 'express'
//Controller

export class GetSkillByIdController {
    private useCase: GetSkillById;

    constructor(getSkillById: GetSkillById) {
        this.useCase = getSkillById;
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
        const skill = await this.useCase.findSkillIdService(id);
        return  res.status(200).json(skill);
    }
}