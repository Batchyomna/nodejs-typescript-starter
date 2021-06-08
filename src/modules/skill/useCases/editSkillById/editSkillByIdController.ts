import { EditSkillById } from './editSkillById'
import { Request, Response } from 'express'
//Controller qui appelle la service 

export class EditSkillByIdController {
    private useCase: EditSkillById;

    constructor(editSkillById: EditSkillById) {
        this.useCase = editSkillById;
    }
      
    public async execute(req: Request, res: Response) {

        const { id, name, description, category } = req.body
        if (!id) {
            return res.status(400).json({
                error: {
                    message: 'Id is required'
                }
            });
        }
        const skill = await this.useCase.editSkillIdService(id, { name, description, category });
       return  res.status(200).json(skill);
    }
}